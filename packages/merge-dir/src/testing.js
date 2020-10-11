// @flow

// $FlowFixMe FIXME: can not use module package
import module from 'module';
import vm from 'vm';
import path from 'path';

import { emptyFunction } from 'fbjs';

import { d3DirTree } from '@mikojs/utils';
import { type d3DirTreeNodeType } from '@mikojs/utils/lib/d3DirTree';

import { type callbackType } from './utils/watcher';
import mergeDir from './index';

const cache = {};

mergeDir.updateTools({
  /**
   * @param {string} filePath - cache file path
   * @param {string} content - cache content
   */
  writeToCache: (filePath: string, content: string) => {
    const context = {};

    vm.runInThisContext(module.wrap(content))(
      context,
      require,
      context,
      filePath,
      path.dirname(filePath),
    );
    cache[filePath] = context.exports;
  },

  /**
   * @param {string} filePath - cache file path
   *
   * @return {any} - any function from cache
   */
  getFromCache: <C>(filePath: string): C => cache[filePath],

  /**
   * @param {string} folderPath - folder path
   * @param {callbackType} callback - handle files function
   *
   * @return {Function} - close client
   */
  watcher: async (
    folderPath: string,
    callback: callbackType,
  ): Promise<() => void> => {
    callback(
      d3DirTree(folderPath)
        .leaves()
        .map(({ data }: d3DirTreeNodeType) => ({
          exists: true,
          relativePath: path.relative(folderPath, data.path),
        })),
    );

    return emptyFunction;
  },
});

export default mergeDir;
