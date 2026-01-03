

//**************Practice  Questions ***********

//Q1. Get user to input a number using prompt("Enter a number:"), Check if the number is a multiple of 5 or not.

// let num = prompt("Enter a number:");

// if(num % 5 === 0) {
//     console.log(num," is multiple of 5");
    
// } else {
//     console.log(num,"is NOT multiple of 5");
// }


// if(num % 3 === 0) {
//     console.log(num," is multiple of 3");
    
// } else {
//     console.log(num,"is NOT multiple of 3");
// }


// Q2. Write a code which can give grades to students according to their scores:
 //.80-100, A
 //.70-89, B
 //.60-69, C
 //.50-59, D
//  //.0-49, F

//  let score = prompt("Enter your score (0-100)");
//  let grade;

//  if(score >=90 && score <=100){
//     grade = "A";
//  } else if (score >= 70 && score <= 89){
//     grade = "B";
//  } else if (score >= 60 && score <= 69){
//     grade = "C";
//  } else if (score >= 50 && score <= 59){
//     grade = "D";
//  } else if (score >= 0 && score <= 49){
//     grade = "F";
//  }

//  console.log("Acording to your scores, your grade was :", grade);

//Q3. Print all even numbers from 0 to 100.

// for (let num = 0; num < 10;num ++);{
//     if (num % 2 === 0) { // even numbers
//         console.log("num =",num);
//     }
// }
// for (let num = 0; num < 10;num ++);{
//     if (num % 2 !== 0) { // odd numbers
//         console.log("num =",num);
//     }
// }

//Q4. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user entsrs correct value.

let gameNum = 25;

let userNum = prompt("Guess the game number :");

while(userNum != gameNum){
    userNum = prompt("You entered wrong number : ");

}

console.log("Congratulation, you entered the right number");
