// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const prompt = require("prompt-sync")({ sigint: true });

let age = prompt("Enter your age");
newage = 18 - age;

// with ternary operator

age>=19 ? console.log("You are old enough to drive") : console.log(`Please wait for another ${newage} years to turn 18`);