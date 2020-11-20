// @flow

import url from 'url';
import {
  type IncomingMessage as IncomingMessageType,
  type ServerResponse as ServerResponseType,
} from 'http';

import {
  graphqlHTTP,
  type OptionsData as OptionsDataType,
} from 'express-graphql';

import { type middlewareType } from '@mikojs/server';

import buildSchema, { type schemaType } from './buildSchema';

export type resType = {| json?: (data: mixed) => void |};
export type graphqlType = middlewareType<{}, resType>;

/**
 * @param {string} folderPath - folder path
 * @param {string} prefix - pathname prefix
 * @param {OptionsDataType} options - graphql middleware options
 *
 * @return {graphqlType} - graphqlmiddleware
 */
export default (
  folderPath: string,
  prefix?: string,
  options?: $Diff<OptionsDataType, {| schema: mixed |}>,
): graphqlType =>
  buildSchema<graphqlType>(
    folderPath,
    (schema: schemaType) => (
      req: IncomingMessageType,
      res: ServerResponseType & resType,
    ) => {
      const { pathname } = url.parse(req.url);

      if (
        !pathname ||
        (prefix &&
          !new RegExp(`^${prefix.replace(/^([^/])/, '/$1')}`).test(pathname))
      ) {
        res.statusCode = 404;
        res.end();
        return;
      }

      graphqlHTTP({ ...options, schema })(req, res);
    },
  );
