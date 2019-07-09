// @flow

import React, { type ComponentType, type Node as NodeType } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
import {
  Route,
  type ContextRouter as contextRouterType,
} from 'react-router-dom';
import { type Context as koaContextType } from 'koa';
import { ExecutionEnvironment } from 'fbjs';

import constants from './constants';
import { type errorPropsType } from '../types';
import { lazy, Suspense, type lazyComponentType } from '../ReactIsomorphic';

export type propsType = {|
  mainInitialProps: {},
|};

type stateType = {|
  error: ?$PropertyType<errorPropsType, 'error'>,
  errorInfo: ?$PropertyType<errorPropsType, 'errorInfo'>,
|};

export type storeType = {
  originalUrl: string,
  chunkName: string,
  initialProps: {|
    head?: NodeType,
  |},
  Component: ComponentType<*>,
  Page: $Call<typeof lazy, lazyComponentType, string>,
  lazyPage: lazyComponentType,
};

const store: storeType = {};
const { Main, Loading, ErrorComponent } = constants;

/**
 * @example
 * getPage(ctx)
 *
 * @param {{ location: object, staticContext: koaContextType }} Context - getInitialProps context
 *
 * @return {ComponentType} - page component
 */
const getPage = (
  {
    location: { pathname, search },
    staticContext,
  }: {
    location: { pathname: string, search: string },
    staticContext?: koaContextType,
  },
): $PropertyType<storeType, 'Page'> => {
  const ctx = {
    ctx: staticContext || {
      path: pathname,
      querystring: search.replace(/\?/, ''),
      originalUrl: `${pathname}${search}`,
      origin: window.location.origin,
      href: window.location.href,
      host: window.location.host,
      hostname: window.location.hostname,
      protocol: window.location.protocol,
    },
    isServer: !ExecutionEnvironment.canUseEventListeners,
  };

  if (store.originalUrl !== ctx.ctx.originalUrl) {
    const [
      {
        route: {
          component: { loader, chunkName },
        },
      },
    ] = matchRoutes(constants.routesData, ctx.ctx.path);

    /**
     * @example
     * lazyPage()
     *
     * @return {ComponentType} - return Page
     */
    const lazyPage = async (): $Call<lazyComponentType> => {
      const { default: Component } = await loader();
      const { head, ...initialProps } =
        // $FlowFixMe Flow does not yet support method or property calls in optional chains.
        (await Component.getInitialProps?.(ctx)) || {};
      /** @react render the page */
      const Page = <-P: {}>(props?: P) => (
        <Component {...props} {...initialProps} />
      );

      if (!ctx.isServer) renderToStaticMarkup(head || null);

      store.originalUrl = ctx.ctx.originalUrl;
      store.chunkName = chunkName;
      store.Component = Component;
      store.initialProps = {
        ...initialProps,
        head,
      };

      return { default: Page };
    };

    store.Page = lazy(lazyPage, chunkName);
    store.lazyPage = lazyPage;
  }

  return store.Page;
};

/** control the all page Components */
export default class Root extends React.PureComponent<propsType, stateType> {
  /**
   * @example
   * Root.preload({})
   *
   * @param {store} prevStore - prev store
   *
   * @return {store} - new store
   */
  static preload = (prevStore?: storeType = store): storeType => {
    Object.keys(prevStore).forEach((key: string) => {
      store[key] = prevStore[key];
    });

    return store;
  };

  static getPage = getPage;

  state = {
    error: null,
    errorInfo: null,
  };

  /** @react */
  componentDidCatch(
    error: $PropertyType<stateType, 'error'>,
    errorInfo: $PropertyType<stateType, 'errorInfo'>,
  ) {
    this.setState({ error, errorInfo });
  }

  /** @react */
  render(): NodeType {
    const { mainInitialProps } = this.props;
    const { error, errorInfo } = this.state;

    if (error && errorInfo)
      return <ErrorComponent error={error} errorInfo={errorInfo} />;

    return (
      <Main {...mainInitialProps}>
        {<-P: { key: string }>(props?: P) => (
          <Suspense fallback={<Loading />}>
            <Route
              children={({
                location: { pathname, search },
                staticContext,
              }: contextRouterType) =>
                React.createElement(
                  // $FlowFixMe can not overwrite context type
                  getPage({
                    location: { pathname, search },
                    staticContext,
                  }),
                  props,
                )
              }
            />
          </Suspense>
        )}
      </Main>
    );
  }
}
