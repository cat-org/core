// @flow

import readFiles, { type optionsType, type callbackType } from './readFiles';

export type returnType = (options: optionsType) => Promise<void>;

const callbacks = [];

/**
 * @param {callbackType} prod - originial prod function
 *
 * @return {returnType} - prod function
 */
export default (prod: callbackType): returnType => {
  callbacks.push(
    (options: optionsType) =>
      new Promise(resolve => {
        const watcher = readFiles(options, prod);

        watcher.on('ready', async () => {
          await watcher.close();
          resolve();
        });
      }),
  );

  return async (options: optionsType) => {
    await Promise.all(
      callbacks.map((callback: (options: optionsType) => Promise<void>) =>
        callback(options),
      ),
    );
  };
};
