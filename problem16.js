// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


const prompt = require("prompt-sync")({ sigint: true });

let radius = prompt("Enter the radius");
const pi = 3.14
let area = pi * radius * radius;
let circum = 2 * pi * radius;
console.log("area is "+area);
console.log("circumference is "+circum);