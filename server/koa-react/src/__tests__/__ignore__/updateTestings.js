// @flow

import path from 'path';

const routesData = `module.exports = [{ exact: true, path: ["/"], component: { chunkName: 'pages/index', loader: () => import(/* webpackChunkName: "pages/index" */ '${path.resolve(
  __dirname,
  './pages/index.js',
)}') } }, { exact: true, path: ["/otherPath"], component: { chunkName: 'pages/otherPath', loader: () => import(/* webpackChunkName: "pages/otherPath" */ '${path.resolve(
  __dirname,
  './pages/otherPath.js',
)}') } }, { exact: true, path: ["/otherFolder/otherFolder"], component: { chunkName: 'pages/otherFolder/otherFolder/index', loader: () => import(/* webpackChunkName: "pages/otherFolder/otherFolder/index" */ '${path.resolve(
  __dirname,
  './pages/otherFolder/otherFolder/index.js',
)}') } }, { exact: true, path: ["/otherFolder/otherFolder/:foo"], component: { chunkName: 'pages/otherFolder/otherFolder/[foo]', loader: () => import(/* webpackChunkName: "pages/otherFolder/otherFolder/[foo]" */ '${path.resolve(
  __dirname,
  './pages/otherFolder/otherFolder/[foo].js',
)}') } }, { exact: true, path: ["/otherFolder/:foo"], component: { chunkName: 'pages/otherFolder/[foo]', loader: () => import(/* webpackChunkName: "pages/otherFolder/[foo]" */ '${path.resolve(
  __dirname,
  './pages/otherFolder/[foo].js',
)}') } }, { exact: true, path: ["/noGetInitialProps"], component: { chunkName: 'pages/noGetInitialProps', loader: () => import(/* webpackChunkName: "pages/noGetInitialProps" */ '${path.resolve(
  __dirname,
  './pages/noGetInitialProps.js',
)}') } }, { exact: true, path: ["/error"], component: { chunkName: 'pages/error', loader: () => import(/* webpackChunkName: "pages/error" */ '${path.resolve(
  __dirname,
  './pages/error.js',
)}') } }, { exact: true, path: ["/:foo(aaaa)"], component: { chunkName: 'pages/[foo(aaaa)]', loader: () => import(/* webpackChunkName: "pages/[foo(aaaa)]" */ '${path.resolve(
  __dirname,
  './pages/[foo(aaaa)].js',
)}') } }, { exact: true, path: ["/:bar/:foo"], component: { chunkName: 'pages/[bar]/[foo]', loader: () => import(/* webpackChunkName: "pages/[bar]/[foo]" */ '${path.resolve(
  __dirname,
  './pages/[bar]/[foo].js',
)}') } }, { exact: true, path: ["/*"], component: { chunkName: 'pages/notFound', loader: () => import(/* webpackChunkName: "pages/notFound" */ '${path.resolve(
  __dirname,
  '../../templates/NotFound.js',
)}') } }]`;

const mainFilePath = path.resolve(__dirname, './pages/.templates/Main.js');
const loadingFilePath = path.resolve(
  __dirname,
  './pages/.templates/Loading.js',
);
const errorFilePath = path.resolve(__dirname, './pages/.templates/Error.js');

export default [
  [
    path.resolve(__dirname, './pages/index.js'),
    [path.resolve('./node_modules/.cache/no-basename/routesData.js')],
    [routesData],
  ],
  [path.resolve(__dirname, './pages/.templates/Document.js'), [], []],
  [
    mainFilePath,
    [path.resolve('./node_modules/.cache/no-basename/Main.js')],
    [
      `module.exports = require('${mainFilePath}').default || require('${mainFilePath}');`,
    ],
  ],
  [
    loadingFilePath,
    [path.resolve('./node_modules/.cache/no-basename/Loading.js')],
    [
      `module.exports = require('${loadingFilePath}').default || require('${loadingFilePath}');`,
    ],
  ],
  [
    errorFilePath,
    [path.resolve('./node_modules/.cache/no-basename/Error.js')],
    [
      `module.exports = require('${errorFilePath}').default || require('${errorFilePath}');`,
    ],
  ],
  [
    path.resolve(__dirname, './pages/.templates/NotFound.js'),
    [path.resolve('./node_modules/.cache/no-basename/routesData.js')],
    [
      routesData.replace(
        /templates\/NotFound.js/,
        '__tests__/__ignore__/pages/.templates/NotFound.js',
      ),
    ],
  ],
  [path.resolve(__dirname, './pages/.templates/Others.js'), [], []],
  [path.resolve(__dirname, './pages/exclude.js'), [], []],
  [__dirname, [], []],
];
