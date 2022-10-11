// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

let solveLinEquation = (a, b, c) => {
    for (let i = 0; i * a <= c; i++) {
        if ((c - i * a) % b == 0) {
            console.log(`x = ${i} y = ${(c - i * a) / b}`);
        }
    }
};
solveLinEquation(2, 4, 6);