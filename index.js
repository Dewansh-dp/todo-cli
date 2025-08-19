#!/usr/bin/env node

import chalk from 'chalk';
import { program } from 'commander';
import fs from 'fs';
import Table from 'cli-table3';

program.version('1.0.1');

let fileName = 'todo.json';


function readTodos() {
   let data = fs.readFileSync(fileName, 'utf-8');
   if (data) return JSON.parse(data);
   console.log(chalk.yellow('No todo found.'));
}
function writeTodos(todos) {
   const data = JSON.stringify(todos, null, 3);
   fs.writeFileSync(fileName, data);
}
program.parse(process.argv);

