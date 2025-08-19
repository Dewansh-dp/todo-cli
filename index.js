#!/usr/bin/env node

import chalk from 'chalk';
import { program } from 'commander';
import fs from 'fs';
import Table from 'cli-table3';

program.version('1.0.1');

let fileName = 'todo.json';


program.parse(process.argv);

