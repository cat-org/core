// @flow

import createLogger from '../index';
import testingLogger from '../testingLogger';

describe('logger', () => {
  beforeEach(() => {
    testingLogger.reset();
    delete process.env.DEBUG;
  });

  test.each`
    debug
    ${undefined}
    ${'logger:*'}
  `(
    'could log message with process.env.DEBUG = $debug',
    async ({ debug }: {| debug?: string |}) => {
      const logger = createLogger('logger:debug');

      if (debug) process.env.DEBUG = debug;
      else delete process.env.DEBUG;

      logger.start('start');
      logger.info('info');
      logger.warn('warn');
      logger.debug('debug');
      logger.log('log');
      logger.log(1);
      logger.success('success');
      logger.stop();
      logger.error('error');

      const message = (await testingLogger.getInstance())?.lastFrame();

      expect(message).toMatch(/.*logger .*info/);
      expect(message).toMatch(/.*logger .*warn/);
      expect(message).toMatch(/.*logger .*log/);
      expect(message).toMatch(/.*logger .*1/);
      expect(message).toMatch(/.*logger .*success/);
      expect(message).toMatch(/.*logger .*error/);

      if (debug) expect(message).toMatch(/.*logger:debug .*debug/);
    },
  );
});
