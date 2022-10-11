// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or October, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer



const prompt = require("prompt-sync")({ sigint: true });

let month = prompt("Enter month ");


switch (month) {
    case "september": 
    case "october":
    case "november":
        console.log("the season is Autumn.");
        break;

    case "january":
    case "february":
    case "december":
        console.log("the season is Winter.");
        break;

    case "march":
    case "april":
    case "may":
        console.log("the season is Spring.");
        break;

    case "june":
    case "july":
    case "august":
        console.log("the season is Summer");
        break;
    default:
        console.log("Enter valid month");
        break;
}












// if (month == "September" || month == "October" || month == "November") {
//     console.log("the season is Autumn.");
// }
// else if(month == "December" || month == "Januray" || month == "February"){
//     console.log("the season is Winter.");
// }
// else if(month == "March" || month == "April" || month == "May"){
//     console.log("the season is Spring.");
// }
// else{
//     console.log("the season is Summer");
// }