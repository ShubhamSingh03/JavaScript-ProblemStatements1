// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

import { countryList } from "./countries.js";
if (countryList.includes("Ethiopia")) {
    console.log(countryList.find((country) => country === "Ethiopia").toUpperCase());
} else {
    countryList.push("Ethiopia");
    console.log(countryList);
}