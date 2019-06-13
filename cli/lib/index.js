#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
console.log(chalk.blue(figlet.textSync('website-cli', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description('A CLI for managing a website.')
    .option('-M, --incrementMajor', 'Increment major version.')
    .option('-m, --incrementMinor', 'Increment minor version.')
    .parse(process.argv);
if (program.incrementMajor)
    console.log('  - incrementMajor');
if (program.incrementMinor)
    console.log('  - incrementMinor');
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
