// @flow

import EventEmitter from 'events';

import {
  graphql,
  type GraphQLArgs as GraphQLArgsType,
  type GraphQLSchema as GraphQLSchemaType,
} from 'graphql';
import { type ExecutionResult as ExecutionResultType } from 'graphql/execution/execute';
import { GraphQLError } from 'graphql/error/GraphQLError';
import graphqlHTTP, {
  type OptionsData as expressGraphqlOptionsType,
} from 'express-graphql';

import { notFound, type middlewareType } from '@mikojs/server';

import buildSchema, {
  type optionsType as buildSchemaOptionsType,
} from './utils/buildSchema';
import buildRelayCompiler from './utils/buildRelayCompiler';

type optionsType = {|
  ...buildSchemaOptionsType,
  graphqlOptions?: expressGraphqlOptionsType,
|};

export type schemaType = {|
  events: EventEmitter,
  get: () => ?GraphQLSchemaType,
  cache?: GraphQLSchemaType,
|};

type queryOptionsType = $Diff<GraphQLArgsType, { schema: mixed }>;

type returnType = {|
  middleware: middlewareType<>,
  query: (graphqlArgs: queryOptionsType) => Promise<ExecutionResultType>,
  relayCompiler: (argv: $ReadOnlyArray<string>) => void,
|};

/**
 * @param {string} folderPath - folder path
 * @param {optionsType} options - options
 *
 * @return {returnType} - graphql object
 */
export default (
  folderPath: string,
  // $FlowFixMe FIXME https://github.com/facebook/flow/issues/2977
  options?: optionsType = {},
): returnType => {
  const schema: schemaType = {
    events: new EventEmitter(),
    get: () => schema.cache,
  };
  const { graphqlOptions, ...buildSchemaOptions } = options;

  buildSchema(schema, folderPath, buildSchemaOptions);

  return {
    middleware: async (req: http.IncomingMessage, res: http.ServerResponse) => {
      const currentSchema = schema.get();

      if (!currentSchema) {
        notFound(req, res);
        return;
      }

      await graphqlHTTP({
        ...graphqlOptions,
        schema: currentSchema,
      })(req, res);
      res.statusCode = 200;
    },

    query: (graphqlArgs: queryOptionsType): Promise<ExecutionResultType> => {
      const currentSchema = schema.get();

      return !currentSchema
        ? Promise.resolve({
            errors: [new GraphQLError('Must provide a schema.')],
          })
        : graphql({
            ...graphqlArgs,
            schema: currentSchema,
          });
    },

    relayCompiler: buildRelayCompiler(schema),
  };
};
