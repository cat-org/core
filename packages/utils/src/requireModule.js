// @flow

/**
 * @example
 * requireModule('module')
 *
 * @param {string} moduleName - module name
 *
 * @return {any} - module
 */
export default (moduleName: string) =>
  /\.json$/.test(moduleName)
    ? // $FlowFixMe The parameter passed to require must be a string literal.
      require(moduleName)
    : // $FlowFixMe The parameter passed to require must be a string literal.
      require(moduleName).default || require(moduleName);
