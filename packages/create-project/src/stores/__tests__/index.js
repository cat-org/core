// @flow

import { execa } from 'execa';

import Store from '..';

import ctx from './__ignore__/ctx';

/** child store */
class ChildStore extends Store {}

const childStore = new ChildStore();

/** parent store */
class ParentStore extends Store {
  subStores = [childStore];
}

const parentStore = new ParentStore();

describe('store', () => {
  test('run', async (): Promise<void> => {
    expect(await parentStore.run(ctx)).toEqual([childStore]);
  });

  test('execa error', async (): Promise<void> => {
    execa.mainFunction = () => {
      throw new Error('command error');
    };

    await expect(childStore.execa('command error')).rejects.toThrow(
      'process exit',
    );
  });
});
