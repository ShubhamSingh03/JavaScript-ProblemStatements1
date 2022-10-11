// 12. Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let now = new Date();
console.log(now);

let year = now.getFullYear();

let month = now.getMonth(Number) +1;

let today = now.getDate();

let dayToday =now.getDay();

let hours = now.getHours();

let minutes = now.getMinutes();

const seconds = Date.now();

console.log(
    `
    \t Year: ${year}
    \t Month: ${month}
    \t Date Today: ${today}
    \t Day Today: ${dayToday}
    \t Hours: ${hours}
    \t Minutes: ${minutes}
    \t Seconds: ${seconds}
    `
)