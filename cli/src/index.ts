#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import path from 'path';
import program from 'commander';

clear();
console.log(
	chalk.blue(figlet.textSync('website-cli', { horizontalLayout: 'full' }))
);

program
	.version('0.0.1')
	.description('A CLI for managing a website.')
	.option('-M, --incrementMajor', 'Increment major version.')
	.option('-m, --incrementMinor', 'Increment minor version.')
	.parse(process.argv);

if (program.incrementMajor) console.log('  - incrementMajor');
if (program.incrementMinor) console.log('  - incrementMinor');

if (!process.argv.slice(2).length) {
	program.outputHelp();
}
