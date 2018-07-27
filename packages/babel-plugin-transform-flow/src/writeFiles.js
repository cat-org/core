// @flow

import { transformFile } from '@babel/core';
import outputFileSync from 'output-file-sync';

import utils from './utils';

type flowFileType = {
  srcPath: string,
  destPath: string,
  filePath?: string,
  babelConfigs: {
    parserOpts?: {},
  },
};

/**
 * @example
 * new WriteFiles()
 */
class WriteFiles {
  store = [];

  isWritting = false;

  /**
   * @example
   * flowFiles.add({ srcPath, destPath });
   *
   * @param {Object} file - file information
   */
  add = (file: flowFileType) => {
    this.store.push(file);

    if (!this.isWritting) this.writeFiles();
  };

  writeFiles = () => {
    this.isWritting = true;

    const { verbose, watch } = utils.options;
    const { srcPath, destPath, babelConfigs } = this.store.pop();

    new Promise((resolve, reject) => {
      transformFile(
        srcPath,
        babelConfigs,
        (err?: mixed, { code }: { code: string }) => {
          if (err) {
            reject(`@cat-org/babel-plugin-transform-flow Error: ${err}`);
            return;
          }

          outputFileSync(destPath, code);
        },
      );

      this.store = this.store.filter(
        ({ srcPath: src }: flowFileType) => src !== srcPath,
      );
      this.isWritting = false;

      resolve();
    })
      .then(() => {
        // eslint-disable-next-line no-console
        if (verbose) console.log(`${srcPath} -> ${destPath}`);
        if (this.store.length !== 0) this.writeFiles();
      })
      .catch((e: mixed) => {
        // eslint-disable-next-line no-console
        if (watch)
          console.log(`@cat-org/babel-plugin-transform-flow validate: ${e}`);
        else throw new Error(e);
      });
  };
}

export default new WriteFiles();
