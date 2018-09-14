#! /usr/bin/env node
// @flow

import childProcess from 'child_process';

import debug from 'debug';

import cliOptions from 'utils/cliOptions';
import configs from 'utils/configs';
import generateFiles from 'utils/generateFiles';
import worker from 'utils/worker';

const { cliName } = cliOptions;
const { argv, env, cli } = configs.getConfig(cliOptions);
const debugLog = debug(`configs-scripts:bin[${cliName}]`);

process.on('unhandledRejection', (error: mixed) => {
  throw error;
});

(async (): Promise<void> => {
  const server = await worker.init();

  /**
   * Remove files
   *
   * @example
   * removeFiles(0);
   *
   * @param {number} exitCode - process exit code
   */
  const removeFiles = (exitCode: number) => {
    const client = worker.writeCache({
      key: {
        cwd: process.cwd(),
        argv: process.argv,
      },
      using: false,
    });

    if (server) {
      if (Object.keys(worker.cache).length !== 0) {
        setTimeout(removeFiles, 500, exitCode);
        return;
      }

      server.close(() => {
        process.exit(exitCode);
      });
      return;
    }

    if (client) {
      client.on('end', () => {
        process.exit(exitCode);
      });
      return;
    }

    process.exit(exitCode);
  };

  // handle config and ignore files
  generateFiles();

  // run command
  debugLog(
    `Run command: ${JSON.stringify([argv[0], cli, ...argv.slice(2)], null, 2)}`,
  );
  childProcess
    .spawn(argv[0], [cli, ...argv.slice(2)], {
      stdio: 'inherit',
      env: {
        ...process.env,
        ...env,
      },
    })
    .on('close', (exitCode: number) => {
      debugLog('Run command done, remove files');
      removeFiles(exitCode);
    });
})();
