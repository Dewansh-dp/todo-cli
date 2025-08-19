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

program
   .command('add <task>')
   .description('Create new todo')
   .action((task) => {
      const id = parseInt(Date.now().toString().slice(8));
      const newTodo = {
         id,
         task,
         done: false,
      };
      let todos = readTodos();
      todos.push(newTodo);
      writeTodos(todos);
      listTodos(todos);
   });

program
   .command('delete <id>')
   .description('Delete todo with ID')
   .action((id) => {
      let todos = readTodos();
      todos = todos.filter((todo) => todo.id !== parseInt(id));
      writeTodos(todos);
      listTodos(todos);
   });

program
   .command('update <id> <task>')
   .description('Update todo task with ID')
   .action((id, task) => {
      let todos = readTodos();
      let todo = todos.find((todo) => todo.id == id);
      /*  todo here holds the reference to the object in the todos array
          so if we make changes to todo it will reflect in todos array */
      if (todo) {
         todo.task = task;
         writeTodos(todos);
         listTodos(todos);
      } else {
         console.log(chalk.yellow('No todo found.'));
      }
   });

program
   .command('done <id>')
   .description('Mark todo as done with ID')
   .action((id) => {
      let todos = readTodos();
      let todo = todos.find((todo) => todo.id == parseInt(id));
      if (todo) {
         todo.done = true;
         writeTodos(todos);
         listTodos(todos);
      } else console.log(chalk.yellow('No todo found.'));
   });

program
   .command('list')
   .description('List all todos')
   .action(() => {
      const todos = readTodos();
      if (!todos) {
         console.log(chalk.yellow('No todo present.'));
      } else {
         listTodos(todos);
      }
   });

program.parse(process.argv);
