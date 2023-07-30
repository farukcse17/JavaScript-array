// you are given an array: 
// var fruits = ['Apple', 'Banana', 'Orange'];
// 1. Find the index of banana and replace banana with mango 
// 2. Remove orange and add watermalon 

var fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits);
// console.log(fruits.indexOf('Banana'));

// var fruitIndex = fruits.indexOf('Banana');
// console.log(fruitIndex)

Replace banana with mango
fruits[1] = 'Mango';
console.log(fruits);

// Remove orange and add watermelon
// Remove orange 
var removeItem = fruits.pop();
console.log("Remove:", removeItem);
console.log("New list of array: ", fruits);
// Added Watermelon
var addItem = fruits.push('Watermelon');
console.log("after added fruit New list of array: ", fruits);