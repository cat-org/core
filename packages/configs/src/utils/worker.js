// @flow

import fs from 'fs';
import net from 'net';

import { areEqual } from 'fbjs';
import moment from 'moment';
import rimraf from 'rimraf';
import debug from 'debug';

import printInfos from './printInfos';

const debugLog = debug('configs-scripts:worker');

/** Use to control file */
class Worker {
  cache = {};

  server = null;

  /**
   * Init a worker
   *
   * @example
   * worker.init()
   *
   * @return {Promise} - a server or null
   */
  init = (): Promise<net.Server | null> =>
    new Promise(resolve => {
      this.server = net.createServer((socket: net.Socket) => {
        socket.setEncoding('utf8');
        socket.on('data', (data: string) => {
          this.writeCache(JSON.parse(data));
        });
      });

      this.server.on('error', (err: mixed) => {
        if (err) {
          this.server = null;
          resolve(null);
        }
      });

      if (this.server)
        this.server.listen(8888, undefined, undefined, () => {
          debugLog('Open server at 8888');
          resolve(this.server);
        });
    });

  /**
   * Write cache
   *
   * @example
   * worker.writeCache({})
   *
   * @param {string} data - cache
   *
   * @return {client | null} - a client or null
   */
  writeCache = (data: {
    filePath?: string,
    key?: {
      cwd: string,
      argv: $ReadOnlyArray<string>,
    },
    using: string | false,
  }): ?net.Socket => {
    const { filePath, key, using } = data;

    if (this.server) {
      debugLog(`Write cache: ${JSON.stringify(data, null, 2)}`);

      if (!using && !filePath) {
        Object.keys(this.cache).forEach((cacheFilePath: string) => {
          this.cache[cacheFilePath].keys = this.cache[
            cacheFilePath
          ].keys.filter((cacheKey: {}): boolean => !areEqual(key, cacheKey));

          if (
            this.cache[cacheFilePath].keys.length === 0 &&
            fs.existsSync(cacheFilePath)
          ) {
            if (
              moment().diff(this.cache[cacheFilePath].using, 'seconds') > 0.5
            ) {
              delete this.cache[cacheFilePath];
              rimraf.sync(cacheFilePath);
              debugLog(`Remove file: ${cacheFilePath}`);
            }
          }
        });

        debugLog(`Cache: ${JSON.stringify(this.cache, null, 2)}`);
        return null;
      }

      if (!filePath) {
        printInfos(
          ['filePath can not be undefined in worker.writeCache'],
          true,
        );
        return null;
      }

      if (!this.cache[filePath]) this.cache[filePath] = { keys: [] };
      if (key) this.cache[filePath].keys.push(key);

      this.cache[filePath].using = using;
      debugLog(`Cache: ${JSON.stringify(this.cache, null, 2)}`);
      return null;
    }

    const client = net.connect({ port: 8888 });

    client.end(JSON.stringify(data));
    return client;
  };
}

export default new Worker();
