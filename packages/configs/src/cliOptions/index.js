// @flow

import commander from 'commander';
import chalk from 'chalk';
import debug from 'debug';
import npmWhich from 'npm-which';
import { emptyFunction } from 'fbjs';

import { createLogger } from '@mikojs/utils';

import { version } from '../../package.json';

import printInfo from './printInfo';

import configs from 'utils/configs';

type optionType =
  | boolean
  | {|
      cli: string,
      argv: $ReadOnlyArray<string>,
      env: {},
      cliName: string,
    |};

const debugLog = debug('configs:cliOptions');
const logger = createLogger('@mikojs/configs');

/**
 * @example
 * validateCliName('cliName')
 *
 * @param {string} cliName - cli name
 *
 * @return {boolean} - test result
 */
const validateCliName = (cliName: ?string): boolean => {
  if (!cliName) {
    logger
      .fail(chalk`Should give an argument at least`)
      .fail(chalk`Use {green \`-h\`} to get the more information`);
    return false;
  }

  if (!configs.get(cliName)) {
    logger
      .fail(chalk`Can not find {cyan \`${cliName}\`} in configs`)
      .fail(chalk`Use {green \`info\`} to get the more information`);
    return false;
  }

  return true;
};

/**
 * @example
 * fileOptions('--key', 'key', '--key')
 *
 * @param {string} optionKey - option key to test
 * @param {string} arg - current argument
 * @param {string} prevArg - prev argument
 *
 * @return {boolean} - test result
 */
const filterOptions = (optionKey: ?string, arg: string, prevArg: string) =>
  !optionKey
    ? false
    : optionKey === arg ||
      optionKey === prevArg ||
      new RegExp(`^${optionKey}=`).test(arg);

/**
 * @example
 * getOptions({ cliName: 'cliName', ... })
 *
 * @param {object} options - the options from the commander
 *
 * @return {optionType} - cli options
 */
const getOptions = ({
  cliName,
  configsFiles,
  rawArgs,
  options,
}: {|
  cliName: string,
  configsFiles?: $ReadOnlyArray<string>,
  rawArgs: $ReadOnlyArray<string>,
  options: $ReadOnlyArray<{|
    short?: string,
    long: string,
  |}>,
|}): optionType => {
  if (!validateCliName(cliName)) return false;

  configs.addConfigsFilesToConfig(cliName, configsFiles || []);

  const {
    alias: cli = cliName,
    run = emptyFunction.thatReturnsArgument,
    env = {},
  } = configs.get(cliName);
  const rawArgsFiltered = rawArgs
    .slice(2)
    .filter(
      (arg: string, index: number, allArgs: $ReadOnlyArray<string>) =>
        arg !== cliName &&
        !options.some(
          ({ short, long }: {| short?: string, long: string |}) =>
            filterOptions(short, arg, allArgs[index - 1]) ||
            filterOptions(long, arg, allArgs[index - 1]),
        ),
    );

  debugLog({ rawArgsFiltered });

  try {
    const result = {
      cli:
        typeof cli !== 'function'
          ? npmWhich(process.cwd()).sync(cli)
          : cli([cliName, ...rawArgsFiltered]),
      argv: run(rawArgsFiltered),
      env,
      cliName,
    };

    debugLog(result);

    return result;
  } catch (e) {
    if (!/not found/.test(e.message)) throw e;

    logger.fail(e.message.replace(/not found/, 'Not found cli'));

    return false;
  }
};

/**
 * @example
 * cliOptions([])
 *
 * @param {Array} argv - command line
 *
 * @return {optionType} - cli options
 */
export default async (argv: $ReadOnlyArray<string>): Promise<optionType> =>
  new Promise((resolve, reject) => {
    const program = new commander.Command('configs')
      .version(version, '-v, --version')
      .arguments('<command-type> [commands...]')
      .usage(chalk`{green <command-type> [commands...]} {gray [options...]}`)
      .description(
        chalk`Example:
  configs {green babel -w}
  configs {green exec rawArgsFilteredrun custom command} {gray --configs-files babel,lint}
  configs {cyan info}
  configs {cyan info} {green babel}
  configs {cyan install} {green babel}
  configs {cyan remove} {green babel}`,
      )
      .option(
        '--configs-files [fileName...]',
        'use to generate the new config files which are not defined in the cli configs',
        // $FlowFixMe TODO: Flow does not yet support method or property calls in optional chains.
        (value: string) => value?.split(','),
      )
      .allowUnknownOption()
      .action(
        (
          cliName: string,
          _: mixed,
          options: {|
            configsFiles?: $ReadOnlyArray<string>,
            rawArgs: $ReadOnlyArray<string>,
            options: $ReadOnlyArray<{|
              short?: string,
              long: string,
            |}>,
          |},
        ) => {
          resolve(getOptions({ ...options, cliName }));
        },
      );

    program
      .command('info')
      .arguments('[command-type]')
      .usage(chalk`{green [command-type]}`)
      .description('print more info about configs')
      .action((cliName: ?string) => {
        resolve(printInfo(cliName, logger));
      });

    program
      .command('install')
      .arguments('<command-type>')
      .usage(chalk`{green <command-type>}`)
      .description('install packages by config')
      .action((cliName: string) => {
        resolve(
          !validateCliName(cliName)
            ? false
            : {
                cli: 'install',
                argv: (
                  configs.get(cliName).install ||
                  emptyFunction.thatReturnsArgument
                )(['yarn', 'add', '--dev']),
                env: {},
                cliName,
              },
        );
      });

    program
      .command('remove')
      .arguments('<command-type>')
      .usage(chalk`{green <command-type>}`)
      .description('use to remove the generated files and the server')
      .action((cliName: string) => {
        resolve(
          !validateCliName(cliName)
            ? false
            : {
                cli: 'remove',
                argv: [],
                env: {},
                cliName,
              },
        );
      });

    if (argv.length === 2) resolve(validateCliName());
    else program.parse([...argv]);
  });
