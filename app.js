const yargs = require('yargs');
const chalk = require('chalk');
const get = require('./cmd/get');
const add = require('./cmd/add');
const del = require('./cmd/del');
const all = require('./cmd/all');

console.log('\n');
console.log(chalk.magenta.inverse('#####################################################################\n'));
console.log(chalk.magenta.inverse('######################'),'COMMAND LINE FOR CLIENT',chalk.magenta.inverse('######################\n'));
console.log(chalk.magenta.inverse('###################'),'by Nicola Solazzo (niksolaz)',chalk.magenta.inverse('####################\n'));
console.log(chalk.magenta.inverse('######'),'GITHUB: https://github.com/niksolaz/node-cmd-clienti',chalk.magenta.inverse('#########\n'));
console.log(chalk.magenta.inverse('#####################################################################\n'));
console.log(chalk.blue.bold('For Testing app: '), chalk.yellow.bold('node app.js [COMMAND] --[ARG KEY]=[ARG VALUE]\n'));
console.log(chalk.blue.bold('List [COMMAND]:'));
console.log(chalk.yellow.bold('\t 1 - get\t'),'get client');
console.log(chalk.yellow.bold('\t 2 - add\t'),'add client');
console.log(chalk.yellow.bold('\t 3 - del\t'),'delete client\n');
console.log(chalk.blue.bold('List [ARG KEY]:'));
console.log(chalk.yellow.bold('\t --nome \t'), '--nome=[insert nome]');
console.log(chalk.yellow.bold('\t --email\t'), '--email=[insert email]');
console.log(chalk.yellow.bold('\t --telefono\t'), '--telefono=[insert phone]\n');
console.log(chalk.magenta.inverse('#####################################################################\n'));
get(yargs);
add(yargs);
del(yargs);
all(yargs);

yargs.parse();