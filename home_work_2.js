//2.задача про ворон
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Пожалуйста, введите количество птиц ', (answer) => {

    if ((answer % 10) == 1)
        console.log(`Это ${answer} ворона`);
    else if ((answer % 10) == 3 || (answer % 10) == 4)
        console.log(`Это ${answer} вороны`);
    else
        console.log(`Это ${answer} ворон`);

rl.close();
});





