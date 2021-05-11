import chalk from 'chalk';
import { BaseCommand as Command } from '@yarnpkg/cli';
import { Configuration, Project, structUtils } from '@yarnpkg/core';

import findWorkspaces from '../utils/findWorkspaces';

export default class Base extends Command {
  @Command.String()
  commandName

  @Command.Proxy()
  args = [];

  @Command.Boolean('-v,--verbose', { description: chalk`This is a proxy option for {cyan @yarnpkg/plugin-workspace-tools}` })
  verbose = false;

  @Command.Boolean('-p,--parallel', { description: chalk`This is a proxy option for {cyan @yarnpkg/plugin-workspace-tools}` })
  parallel = false

  @Command.Boolean('-i,--interlaced', { description: chalk`This is a proxy option for {cyan @yarnpkg/plugin-workspace-tools}` })
  interlaced = false;

  @Command.String('-j,--jobs', { description: chalk`This is a proxy option for {cyan @yarnpkg/plugin-workspace-tools}` })
  jobs

  @Command.Array('--include', { description: chalk`This is a proxy option for {cyan @yarnpkg/plugin-workspace-tools}` })
  include = [];

  @Command.Array('--exclude', { description: chalk`This is a proxy option for {cyan @yarnpkg/plugin-workspace-tools}` })
  exclude = [];

  @Command.String('--git-range', { description: chalk`Use to find workspaces with running {cyan git diff}` })
  gitRange

  addFilter = (options, name) => options.reduce((result, option) => [
    ...result,
    name,
    option,
  ], []);

  addOption = (condition, ...args) => condition ? args : [];

  buildExecute = executeCommandName => async () => {
    const { cwd, plugins } = this.context;
    const { run } = this.cli;
    const configuration = await Configuration.find(cwd, plugins);
    const { projectCwd } = configuration;
    const { project: { workspaces }, locator } = await Project.find(configuration, projectCwd);

    await run([
      'workspaces',
      'foreach',
      '--exclude',
      structUtils.stringifyIdent(locator),
      ...(!this.gitRange ? [] : await findWorkspaces(workspaces, {
        cwd: projectCwd,
        gitRange: this.gitRange,
      })),
      ...this.addFilter(this.include, '--include'),
      ...this.addFilter(this.exclude, '--exclude'),
      ...this.addOption(this.verbose, '-v'),
      ...this.addOption(this.parallel, '-p'),
      ...this.addOption(this.interlaced, '-i'),
      ...this.addOption(this.jobs, '-j', this.jobs),
      executeCommandName,
      this.commandName,
      ...this.args
    ], {
      cwd: projectCwd
    });
  }
}
