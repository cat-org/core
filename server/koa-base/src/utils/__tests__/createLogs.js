// @flow

import fs from 'fs';

import createLogs from '../createLogs';

jest.mock('fs');

describe('create logs', () => {
  test.each`
    fsExist
    ${true}
    ${false}
  `(
    'create logs with folder exist = $fsExist',
    ({ fsExist }: {| fsExist: boolean |}) => {
      // $FlowFixMe jest mock
      fs.existsSync.mockReturnValue(fsExist);

      expect(createLogs()[0]).toBe('combined');
    },
  );
});
