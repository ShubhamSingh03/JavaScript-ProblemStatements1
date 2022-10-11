// 35. Write a functions which checks if all items are unique in the array.

function itemsArray(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return "Array is not unique!";
            }
        }
    }
    return "Array is unique";
};

console.log(itemsArray([1, 2, 8, 4, 6]));