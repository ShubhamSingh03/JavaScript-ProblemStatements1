// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


const prompt = require("prompt-sync")({ sigint: true });

let num = prompt("Enter your Number");

num % 2 == 0 ? console.log("Given number is even") : console.log("Given number is not even");