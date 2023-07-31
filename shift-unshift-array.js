var fruits = ['apple', 'banana', 'orange', 'olive', 'Guava'];
// console.log(fruits);
// Remove fruits from first insert of list
// var fruitRemoveFirst = fruits.shift();
// console.log("Removed fruit is: ", fruitRemoveFirst);
// console.log("Present list of fruits: ", fruits);
// added new fruits into first of the list
var addFruit = fruits.unshift("Mango");
console.log("Added new fruit: ", addFruit);
console.log("Current list of fruits: ", fruits);
console.log(fruits[6]);
var fruitAdd = fruits.push('Black Berry');
console.log(fruitAdd); 
console.log("Current list of fruits: ", fruits);
var fruitRemove = fruits.pop();
console.log(fruitRemove);