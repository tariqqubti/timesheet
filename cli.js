#!/usr/bin/env node

const moment = require('moment');
const log = require('./log');
const sum = require('./sum');

const args = require('yargs')
  .scriptName('timesheet')
  .usage('Manage work on projects\ntimesheet <command> --help for more help')
  .command(
    ['log <date> <project> <hours> [desc]', 'l'],
    'Logs an entry',
    yargs => {
      yargs.positional('date', {
        type: 'string',
        coerce: moment,
        desc: 'Entry date YYYY-MM-DD',
      });
      yargs.positional('project', {
        type: 'string',
        desc: 'Entry project',
      });
      yargs.positional('hours', {
        type: 'number',
        desc: 'Number of hours spent',
      });
      yargs.positional('desc', {
        type: 'string',
        desc: 'Description of the work done for the entry',
      })
    },
    log,
  )
  .command(
    ['sum <from> <to>', 's'],
    'Sums the hours within <from> and <to>',
    yargs => {
      yargs.positional('from', {
        type: 'string',
        coerce: moment,
        desc: 'Date to sum hours from',
      });
      yargs.positional('to', {
        type: 'string',
        coerce: moment,
        desc: 'Date to sum hours to',
      });
    },
    sum,
  )
  .demandCommand(1, 'Please pick a command!')
  .help()
  .argv;