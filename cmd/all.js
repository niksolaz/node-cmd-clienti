const chalk = require('chalk');
const fs = require('fs');

function all(yargs) {
    yargs.command({
        command: 'all',
        describe: 'Ricerca clienti',
        builder: {
            l: {
                describe: 'Clienti da ricercare',
                demandOption: false,
                type: 'string'
            }
        },
        handler(argv) {
            if(argv.l === '') {
                const clienti = getClienti();
                return clienti;
            }
        }
    });
}

function getClienti() {
	const clientiJSON = fs.readFileSync('./clienti.json', 'utf-8');
	const clienti = JSON.parse(clientiJSON);
    console.log(clienti);
    return clienti;
}

module.exports = all;