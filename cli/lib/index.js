#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var commander_1 = __importDefault(require("commander"));
clear_1.default();
console.log(chalk_1.default.blue(figlet_1.default.textSync('website-cli', { horizontalLayout: 'full' })));
commander_1.default
    .version('0.0.1')
    .description('A CLI for managing a website.')
    .option('-M, --incrementMajor', 'Increment major version.')
    .option('-m, --incrementMinor', 'Increment minor version.')
    .parse(process.argv);
if (commander_1.default.incrementMajor)
    console.log('  - incrementMajor');
if (commander_1.default.incrementMinor)
    console.log('  - incrementMinor');
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
}
