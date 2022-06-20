import readline from "readline";
import chalk from "chalk";
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const user = [];
console.log('Digite a propriedade de CSS:  \nOu digite ' + chalk.red('SAIR') + ' para encerrar' );
rl.on('line', (line) => {
    if (line.toUpperCase() == 'SAIR') {
        rl.close();
        user.map(lista => lista.toLowerCase()).sort().map((lista) => console.log(chalk.inverse(lista)));
    }
    user.push(line);
});