// @flow

import gitBranch from 'git-branch';

import configs from './configs';

const newConfigs = {
  babel: {
    install: (install: $ReadOnlyArray<string>): $ReadOnlyArray<string> => [
      ...install,
      '-W',
    ],
    run: (argv: $ReadOnlyArray<string>): $ReadOnlyArray<string> => [
      ...argv,
      '--config-file',
      '../../babel.config.js',
    ],
  },
  server: {
    run: (argv: $ReadOnlyArray<string>): $ReadOnlyArray<string> => [
      ...argv,
      '--config-file',
      '../../babel.config.js',
    ],
  },
  exec: {
    install: (install: $ReadOnlyArray<string>): $ReadOnlyArray<string> => [
      ...install,
      'git-branch',
    ],
    run: (argv: $ReadOnlyArray<string>): $ReadOnlyArray<string> =>
      argv.reduce(
        (newArgv: $ReadOnlyArray<string>, argvStr: string) => [
          ...newArgv,
          ...(argvStr === '--changed'
            ? ['--since', gitBranch.sync().replace(/Branch: /, '')]
            : [argvStr]),
        ],
        [],
      ),
    config: (config: {}): {
      lerna: {
        [string]: $ReadOnlyArray<string>,
        'flow-typed': {
          [string]: $ReadOnlyArray<string>,
        },
      },
    } => ({
      ...config,
      lerna: {
        // flow
        flow: [
          'lerna',
          'exec',
          `"flow --quiet${process.env.CI ? ' && flow stop' : ''}"`,
          '--stream',
          '--concurrency',
          '1',
        ],

        // flow-typed
        'flow-typed': {
          install: ['flow-typed', 'install', '--verbose'],
          'create-symlinks': ['flow-mono', 'create-symlinks', '.flowconfig'],
          'install-types': ['flow-mono', 'install-types', '--ignoreDeps=peer'],
        },

        // babel
        babel: ['lerna', 'exec', '"configs babel"', '--stream'],
        'babel:watch': ['lerna', 'exec', '"configs babel -w"', '--stream'],
      },
    }),
  },
};

export default Object.keys(configs).reduce(
  (
    result: {
      [string]: {
        install: (install: $ReadOnlyArray<string>) => $ReadOnlyArray<string>,
      },
      ...typeof newConfigs,
    },
    key: $Keys<typeof configs>,
  ) =>
    Object.keys(result).includes(key)
      ? result
      : {
          ...result,
          [key]: {
            install: (install: $ReadOnlyArray<string>) => [...install, '-W'],
          },
        },
  newConfigs,
);
