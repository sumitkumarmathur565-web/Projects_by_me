
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a message : ", (message) => {
    console.log(`You entered: ${message}`);
    rl.close();
});
