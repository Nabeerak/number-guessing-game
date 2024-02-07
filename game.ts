import promptSync from 'prompt-sync';

const prompt = promptSync();

let guess: number = prompt('Enter any number from 1 to 50: ');
const no: number = Math.floor(Math.random() * 50) + 1;

while (guess !== no) {
    if (guess > no) {
        console.log("Too high");
    } else if(guess < no) {
        console.log("Too low");
    }
    guess = prompt('Try again: ');
}
console.log("Congratulations! You guessed it right.");
