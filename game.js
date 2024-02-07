"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let guess = prompt('Enter any number from 1 to 50: ');
const no = Math.floor(Math.random() * 50) + 1;
while (guess !== no) {
    if (guess > no) {
        console.log("Too high");
    }
    else if (guess < no) {
        console.log("Too low");
    }
    guess = prompt('Try again: ');
}
console.log("Congratulations! You guessed it right.");
