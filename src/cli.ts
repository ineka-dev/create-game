#!/usr/bin/env node

import chalk from 'chalk';
import { create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = ({ name }: { name: string }) => `
Your game project is ready!

To start developing:
${chalk.gray('>')} ${chalk.green(`cd`)} ${chalk.bold.green(`${name}`)}
${chalk.gray('>')} ${chalk.green(`npm run dev`)}
To build the project:
${chalk.gray('>')} ${chalk.green(`npm run build`)}
`;

create('create-game', {
  templateRoot,
  caveat,
});
