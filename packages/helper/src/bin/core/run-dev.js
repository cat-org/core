// @flow

import debug from 'debug';
import execa from 'execa';

import { handleUnhandledRejection } from '@cat-org/logger';

import cliOptions from './cliOptions';

import logger from 'utils/logger';
import handleError from 'utils/handleError';

handleUnhandledRejection();

if (process.env.NODE_ENV !== 'development')
  logger.fail('Do not use `run-dev` file directly');

(async (): Promise<void> => {
  let errCode: ?number;
  let errMessage: ?string;

  while (errCode !== 0) {
    try {
      // TODO result
      await execa.shell(cliOptions.args);
    } catch (e) {
      const { code, stderr } = e;

      if (stderr === errMessage) {
        debug('helper:run-dev')(e);
        throw stderr;
      }

      errCode = code;
      errMessage = stderr;

      // TODO result
      await handleError(errMessage);
    }
  }
})();
