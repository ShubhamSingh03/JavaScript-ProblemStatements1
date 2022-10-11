// 25. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'

const shoppingCart = ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey'];

// - add 'Meat' in the beginning of your shopping cart if it has not been already added

if(shoppingCart.includes('Meat', 0)){
    console.log("Meat already added");
}
else{
    console.log(shoppingCart.unshift("Meat"));
    console.log(shoppingCart);
}

// - add Sugar at the end of you shopping cart if it has not been already added

let indexx = shoppingCart.length -1; 
if (shoppingCart.indexx == "Sugar") {
    console.log("Already added");
} else {
    shoppingCart.push("Sugar");
    console.log(shoppingCart);
}


// - remove 'Honey' if you are allergic to honey

const index = shoppingCart.indexOf("Honey");
if (index > -1) {
  shoppingCart.splice(index, 1,);
}
console.log(shoppingCart);


// - modify Tea to 'Green Tea'

const indexagain = shoppingCart.indexOf("Tea");

if (indexagain !== -1) {
   shoppingCart[indexagain] = "Green Tea";
}
console.log(shoppingCart);