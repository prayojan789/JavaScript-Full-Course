

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

//  console.log("Acording to your scores, your grade was : ", grade);

//Q3. Print all even numbers from 0 to 100.

// for (let num = 0 ; num < 10 ; num ++);{
//     if (num % 2 === 0) { // even numbers
//         console.log(" num = ",num);
//     }
// }
// for (let num = 0 ; num < 10; num ++);{
//     if (num % 2 !== 0) { // odd numbers
//         console.log (" num = ",num);
//     }
// }

//Q4. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user entsrs correct value.

// let gameNum = 25;

// let userNum = prompt("Guess the game number :");

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number : ");

// }

// console.log("Congratulation, you entered the right number");



//Q5. Prompt the user to enter their full name. Generate a username for them based on the Input. Start username with @, followed by their full name and ending with the fullname length.


// let fullName = prompt("Enter your fullname without spaces");

// let username = "@" + fullName +  fullName.length;
// console.log(username);


//Q6. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

// let marks =[85, 97, 44, 37, 76, 60];

// let sum = 0;

//  for(let val of marks) {
//     sum += val;
//  }
//      let avg = sum / marks.length;
//      console.log(`avg marks of the class = ${avg}`);



//Q6. For a give array with prices of 5items  ->[250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final Price
// after applying offer.

// let items = [250, 645, 300, 900, 50]

// let i = 0;
// for (let val of items) {
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${val}`);
//     i++;
// }

// for (let i = 0; i<items.length; i ++){
//     let offer = items[i] / 10;
//     items[i]-=offer;
// }
// console.log(items);


//Q7. Create an array to store companies -> "Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"
//a. Remove the first company from the array 
//b. Remove Uber & Add Ola in its place
//c. Add Amazon at the end

// let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];

// companies.shift();

// companies.splice(2, 1, "Ola");

// companies.push("Amazon");


// Q8. Create a function using the "function" keywords that takes a String as an argument & returns the number of vowels in the String. 

// function countVowels(str) {
    //"PrayojanPuri" , count = 5
    //     for (const char of str) {
    //         console.log(char);
    //     }

//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     console.log(count);
    
// }

// const countVow =(str) => {
//      let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     console.log(count);
    
// }


// Q9. For a given array of numbers, print the square of each value using the forEach loop.

//  let nums =[2,3,4,5,6];

//  nums.forEach((num) => {
//     console.log(num * num);   //num**2
    
//  });

//   let nums =[245,324,567];

//  nums.forEach((num) => {
//     console.log(num * num);   //num**2
    
//  });

//Q10. We are given array of marks of students. Filter our of the marks of students that scored 90+.


// let marks = [97, 64, 32, 49, 99, 96, 86];

// let toppers= marks.filter((val) =>{
//   return val > 90;
// });

// console.log(toppers);



//Q11. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.


// let n = prompt ("enter a number  : ");

// let arr =[];

// for(let i=1; i<n;i++){
//   arr[i-1] = i;   //1(0), 2(1), 3(2), 4(3)
// }

// console.log(arr);


// let sum = arr.reduce((res, curr) =>{
//   return res + curr;
// });

// console.log("sum = ", sum);

// let factorial = arr.reduce((res, curr)=>{
//   return res * curr;

// });

// console.log("factorial =", factorial);



// Q12. Create a H2 heading element with Text - "Hello JavaScript". Append "from students" to this text using JS.

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText =h2.innerText + " from NCIT College students" // concatenate




// Q13.Create 3 div with common class name - "box". Access them & add some unique feature of them.



// let div = document.querySelectorAll(".box");
//  let idx = 1;
//  for (div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
//  }