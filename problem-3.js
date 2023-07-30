// You are given three numbers 13, 79 and 45 Write a program that will print the largest number using if-else condition.

//You are given a triangle with the sides 9, 8, 9 Write a program to check whether a triangle is Isosceles 

// first problem solution 
var num1, num2, num3;
num1 = 5; num2 = 10; num3 = 3;

if(num1 > num2 && num1 > num3){
    largestNumber = num1;
}
else if(num2 > num1 && num2 > num3){
    largestNumber = num2;
}
else{
    largestNumber = num3;
}

console.log(`The largest number is : ${largestNumber}`);

// const num1 = 13;
// const num2 = 79;
// const num3 = 45;

// if (num1 >= num2 && num1 >= num3) {
//   console.log("The largest number is: " + num1);
// } else if (num2 >= num1 && num2 >= num3) {
//   console.log("The largest number is: " + num2);
// } else {
//   console.log("The largest number is: " + num3);
// }



// second problem solution 
//You are given a triangle with the sides 9, 8, 9 Write a program to check whether a triangle is Isosceles 
var side1 = 2;
var side2 = 4;
var side3 = 2;

if(side1 == side2 && side1 != side3 || side2 == side3 && side2 != side1 || side3 == side1 && side3 != side2){
    console.log("The triangle is Isosceles.");
}
else{
    console.log("The triangle is not isosceles.");
}

// function isIsoscelesTriangle(side1, side2, side3) {
//     return (side1 === side2 && side1 !== side3) || (side1 === side3 && side1 !== side2) || (side2 === side3 && side2 !== side1);
//   }
  
//   const side1 = 9;
//   const side2 = 9;
//   const side3 = 9;
  
//   if (isIsoscelesTriangle(side1, side2, side3)) {
//     console.log("The triangle is isosceles.");
//   } else {
//     console.log("The triangle is not isosceles.");
//   }
  