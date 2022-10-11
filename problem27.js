// 27. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// *****- Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort the array and find the min and max age

let sortages = ages.sort();
console.log(`Sorted array is ${sortages}`);

let maxx = Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24);
console.log(`Maximum age is ${maxx}`);

let minn = Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24);
console.log(`Minimum age is ${minn}`);

let averageAge = () => {
    const sum = ages.reduce((firstValue, secondValue) => firstValue + secondValue, 0);
    return  sum / ages.length;
}
console.log("Average age is "+averageAge());

let ageRange = maxx - minn;
console.log(`Age Range ${ageRange}`);

let compare =  () => {
    const minAvgAge = Math.floor(Math.abs(minn - averageAge()));
    const maxAvgAge = Math.floor(Math.abs(maxx - averageAge()));
    if (minAvgAge === maxAvgAge) {
        console.log("Matched");
    }
}
compare();