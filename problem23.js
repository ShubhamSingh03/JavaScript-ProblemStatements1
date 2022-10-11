// 23. Write a program which tells the number of days in a month, now consider leap year.

const getNumberOfDaysInMonth = (year, month) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];

    const daysInMonth = new Date(year, month, 0).getDate();

    if ((year % 4 === 0 || year % 400 === 0) && year % 100 !== 0) {
        return `There are ${daysInMonth} days in ${months[month - 1]} (Leap Year)`;
    }
    return `There are ${daysInMonth} days in ${months[month - 1]}`;
};
console.log(`${getNumberOfDaysInMonth(2028, 2)}`);