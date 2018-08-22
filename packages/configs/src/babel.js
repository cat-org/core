// @flow

export default {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
    '@cat-org/babel-plugin-transform-flow',
  ],
  ignore:
    process.env.NODE_ENV === 'test'
      ? []
      : /* istanbul ignore next */ ['**/__tests__/**', '**/__mocks__/**'],
  overrides: [],
};
