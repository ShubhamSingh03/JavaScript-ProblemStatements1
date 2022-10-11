// 32. Array Questions
// - Extract all the countries contain the word 'land' from the countries array and print it as array
// - Find the country containing the hightest number of characters in the countries array
// - Extract all the countries containing only four characters from the countries array and print it as array
// - Extract all the countries containing two or more words from the countries array and print it as array
// - Reverse the countries array and capitalize each country and stored it as an array


import { countryList } from "./countries.js";

// - Extract all the countries contain the word 'land' from the countries array and print it as array
let landCountry = countryList.filter(country => country.includes("land"));
console.log(landCountry);


// - Extract all the countries containing only four characters from the countries array and print it as array
let fourCharsCountry = countryList.filter(country => country.length===4);
console.log(fourCharsCountry);


// - Extract all the countries containing two or more words from the countries array and print it as array
let twoOrMoreWordsCountry = countryList.filter((country) => (country.split(" ").length >= 2));
console.log(twoOrMoreWordsCountry);


// - Reverse the countries array and capitalize each country and stored it as an array
let reversedCountry = countryList.reverse();
const capitalizeCountry = reversedCountry.map((country) => country.toUpperCase());
console.log(capitalizeCountry);