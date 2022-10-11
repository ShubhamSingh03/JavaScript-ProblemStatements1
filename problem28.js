//28. Use for loop to iterate from 0 to 100 and print only prime numbers

const prime = (number) => {
    if (number === 0 || number === 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

for (let i = 0; i <= 100; i++) {
    if (prime(i)) {
        console.log(i);
    }
}