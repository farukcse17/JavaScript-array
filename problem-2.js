// var myScore, tomScore, janeScore, peterScore, johnScore;
// myScore = 85;
// tomScore = 66; 
// janeScore = 95;
// peterScore = 56; 
// johnScore = 40;

// function getGrade(score) {
//     if (score >= 80) {
//       return "A";
//     } else if (score >= 60) {
//       return "B";
//     } else if (score >= 50) {
//       return "C";
//     } else if (score >= 40) {
//       return "D";
//     } else {
//       return "F";
//     }
//   }
  
//   const tomScore = 66;
//   const myScore = 85;
//   const janeScore = 95;
//   const peterScore = 56; 
//   const johnScore = 40;
  
//   const tomGrade = getGrade(tomScore);
//   const myGrade = getGrade(myScore);
//   const janeGrade = getGrade(janeScore);
//   const peterGrade = getGrade(peterScore);
//   const johnGrade = getGrade(johnScore);
  
//   console.log(`Tom's score: ${tomScore}, Grade: ${tomGrade}`);
//   console.log(`My score: ${myScore}, Grade: ${myGrade}`);
//   console.log(`Jane's score: ${janeScore}, Grade: ${janeGrade}`);
//   console.log(`Peter score: ${peterScore}, Grade: ${peterGrade}`);
//   console.log(`John score: ${johnScore}, Grade: ${johnGrade}`);

// My result
// if(myScore >= 80){
//     console.log("My score is : A");
// }
// else if(myScore >= 60){
//     console.log("My score is: B");
// }
// else if(myScore >= 50){
//     console.log("My score is: C");
// }
// else if(myScore >= 40){
//     console.log("My score is: D");
// }
// else{
//     console.log("Failed");
// }

// Tom score
// if(tomScore >= 80){
//     console.log("Tom score is : A");
// }
// else if(tomScore >= 60){
//     console.log("Tom score is: B");
// }
// else if(tomScore >= 50){
//     console.log("Tom score is: C");
// }
// else if(tomScore >= 40){
//     console.log("Tom score is: D");
// }
// else{
//     console.log("Failed");
// }

// Jane score
// if(janeScore >= 80){
//     console.log("Jane score is : A");
// }
// else if(janeScore >= 60){
//     console.log("Jane score is: B");
// }
// else if(janeScore >= 50){
//     console.log("Jane score is: C");
// }
// else if(janeScore >= 40){
//     console.log("Jane score is: D");
// }
// else{
//     console.log("Failed");
// }

// Peter score
// if(peterScore >= 80){
//     console.log("Peter score is : A");
// }
// else if(peterScore >= 60){
//     console.log("Peter score is: B");
// }
// else if(peterScore >= 50){
//     console.log("Peter score is: C");
// }
// else if(peterScore >= 40){
//     console.log("Peter score is: D");
// }
// else{
//     console.log("Failed");
// }

// John score
// if(johnScore >= 80){
//     console.log("John score is : A");
// }
// else if(johnScore >= 60){
//     console.log("John score is: B");
// }
// else if(johnScore >= 50){
//     console.log("John score is: C");
// }
// else if(johnScore >= 40){
//     console.log("John score is: D");
// }
// else{
//     console.log("Failed");
// }

function getGPA(score){
    if(score >= 80){
        return "A";
    }
    else if(score >= 60){
        return "B;"
    }
    else if(score >= 50){
        return "C";
    }
    else if(score >= 40){
        return "D";
    }
    else{
        return "Failed";
    }
}

const _myScore = 85;
const _tomScore = 50; 
const _janeScore = 95;

const _myGrade = getGPA(_myScore);
const _tomGrade = getGPA(_tomScore);
const _janeGrade = getGPA(_janeScore);

console.log(`my score is ${_myScore} and my GPA is: ${_myGrade}`);
console.log(`Tom score is ${_tomScore} and my GPA is: ${_tomGrade}`);
console.log(`Jane's score is ${_janeScore} and my GPA is: ${_janeGrade}`);