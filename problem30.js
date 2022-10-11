//30. Write a script which generates a random hexadecimal number.

const randomNumber = () => {
    let number = "0123456789abcdef";
    const hexanumber = [];
    for (let i = 0; i < 10; i++) {
        hexanumber.push(number[Math.floor(Math.random() * 16)]);
    }
    return hexanumber.join("");
};
console.log(`Random Hexadecimal number ${randomNumber()}`);