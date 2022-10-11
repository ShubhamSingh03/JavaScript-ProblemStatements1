// 20. Write a code which can give grades to students according to theirs scores:
// - 90-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

const prompt = require("prompt-sync")({ sigint: true });

let grades = prompt("Enter your numbers")
if (isNaN(grades)) {
    console.log("Enter Valid number");
}
if (grades>=90 && grades <=100) {
    console.log("Your Grade is A");    
}
else if(grades>=70 && grades <=89){
    console.log("Your Grade is B");
}
else if(grades>=60 && grades <=69){
    console.log("Your Grade is C");
}
else if(grades>=50 && grades <=59){
    console.log("Your Grade is D");
}
else if(grades>=00 || grades <=59){
    console.log("Your Grade is F");
}