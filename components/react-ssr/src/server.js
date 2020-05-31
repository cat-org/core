// @flow

import crypto from 'crypto';
import stream, { type Readable as ReadableType } from 'stream';

import React, { type Node as NodeType, type ComponentType } from 'react';
import { renderToStaticMarkup, renderToNodeStream } from 'react-dom/server';
import { StaticRouter as Router, type ContextRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { emptyFunction } from 'fbjs';

import getStatic from './utils/getStatic';
import getPage from './utils/getPage';
import CustomMultistream from './utils/CustomMultistream';

import Root, { type propsType } from './index';

export type documentComponentType<C = {}, P = {}> = ComponentType<P> & {
  getInitialProps?: ({
    ctx: C,
    isServer: boolean,
  }) => P,
};

type optionsType<-C> = {|
  ...$Diff<propsType, {| Loading: mixed, initialState: mixed |}>,
  Document: documentComponentType<C, *>,
  scripts: NodeType,
|};

/**
 * @param {string} url - url string
 * @param {object} ctx - ctx object
 * @param {optionsType} options - components and routes array
 * @param {Function} errorCallback - error callback
 *
 * @return {ReadableType} - rendering stream
 */
export default async <-C>(
  url: string,
  ctx: C & $PropertyType<ContextRouter, 'location'>,
  { Document, Main, Error: ErrorComponent, routes, scripts }: optionsType<C>,
  errorCallback: (errorHtml: string) => void,
): Promise<ReadableType> => {
  // [start] preload
  // preload Document, Main, Page
  const { head: documentHead, ...documentInitialProps } =
    // $FlowFixMe TODO: Flow does not yet support method or property calls in optional chains.
    (await getStatic(Document).getInitialProps?.({
      ctx,
      isServer: true,
    })) || {};

  renderToStaticMarkup(documentHead || null);

  const {
    Page: InitialPage,
    mainProps: mainInitialProps,
    pageProps: pageInitialProps,
    chunkName,
  } = await getPage(Main, routes, ctx);

  // preload scripts
  renderToStaticMarkup(
    <Helmet>
      <script>{`var __MIKOJS_DATA__ = ${JSON.stringify({
        mainInitialProps,
        pageInitialProps,
        chunkName,
      })};`}</script>

      {scripts}
    </Helmet>,
  );
  // [end] preload

  // make document scream
  const hash = crypto.createHmac('sha256', '@mikojs/react-ssr').digest('hex');
  const errorStream = new stream.Readable();
  const [
    upperDocumentStream,
    lowerDocumentStream,
  ] = `<!DOCTYPE html>${renderToStaticMarkup(
    <Document {...documentInitialProps} helmet={Helmet.renderStatic()}>
      <main id="__MIKOJS__">{hash}</main>
    </Document>,
  )}`
    .split(hash)
    .map((text: string): ReadableType => {
      const docmentStream = new stream.Readable();

      docmentStream.push(text);
      docmentStream.push(null);

      return docmentStream;
    });

  return new CustomMultistream([
    upperDocumentStream,
    renderToNodeStream(
      <Router location={url} context={{}}>
        <Root
          Main={Main}
          Loading={emptyFunction.thatReturnsNull}
          Error={ErrorComponent}
          routes={routes}
          initialState={{
            Page: InitialPage,
            mainProps: mainInitialProps,
            pageProps: pageInitialProps,
          }}
        />
      </Router>,
    ).on('error', (error: Error) => {
      errorStream.push(
        renderToStaticMarkup(
          <ErrorComponent error={error} errorInfo={{ componentStack: '' }} />,
        ),
      );
    }),
    (): ReadableType => {
      errorStream.push(null);

      return errorStream;
    },
    lowerDocumentStream,
  ]);
};
