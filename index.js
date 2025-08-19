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

function listTodos(todos) {
   if (todos.length === 0) {
      console.log(chalk.yellow('No todo found.'));
   } else {
      const terminalWidth = process.stdout.columns || 80;
      const table = new Table({
         head: [chalk.cyan('ID'), chalk.cyan('Task'), chalk.cyan('Status')],
         colWidths: [10, Math.floor(terminalWidth * 0.5), 15],
         wordWrap: true,
      });

      todos.forEach((todo) => {
         const status = todo.done ? chalk.green('Done') : chalk.red('Not Done');
         table.push([todo.id, todo.task, status]);
      });

      console.log(table.toString());
   }
}
program.parse(process.argv);

