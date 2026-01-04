//this is a code that prints 
//Hello world on our console windows

// console.log("Hello World");

//Artimetic Operators
//  let a= 5 ;
//  let b= 6 ;

//  console.log("a = ",a,"&b =",b); 
//  console.log("a+b=", a+b);
//  console.log("a-b =", a-b);
//  console.log("a*b =", a*b);
//  console.log("a/b =", a/b);
//  console.log("a%b =", a%b);

 //Unary Operator

//  let a = 5 ;
//  let b = 6 ;

//  console.log("a = ",a, "& b =", b );
//  a = a + 1 ; 
//  console.log("a = ", a) ;

// console.log("a = ", a, "& b = ", b);

// console.log("a --", a --);
// console.log("a =", a);


//Asignment  Operator
//  let a = 5 ;
//  let b = 2;


//  a **= 4 ; // a= a **4
//  console.log("a =", a);

 //Comparison Operators

//  let a = 5 ; 
//  let b = 2;

//  console.log("5 == 2", a == b); // false
//  console.log("5 != 2", a != b); // false
//  console.log("5 == 2", a == b); // false

//  let a = 5 ; //number 
//  let b = "5";// string


//  console.log("a == b", a == b); // true
 

//Logical Operators

// let a = 6;
// let b = 5;


// let  cond1 = a>b ; //true
// let  cond2 = a<b ; //true
// let  cond3 = a===6 ; //true

// console.log("cond1 && cond2 =", cond1 && cond2);
// console.log("cond2 && cond3 =", cond2 && cond3);
// console.log("cond1 && cond2 =", a <b && a===6);
// console.log("cond1 && cond2 =", a <b || a===6);
// console.log("!(6<5) =", !( a===6)); 



//Conditional Statements

// let age = 18;
// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color =  "white";

// }
// console.log(color);



// if (age >= 18) {
//     console.log("you can vote");
    
// }

// if (age < 18) {

//      console.log("you can't vote");
// }

// let mode = "light";
// let color ;

// if (mode == "dark") {
//     color = "black";

// } else{
//     color = "white";
// }

//     console.log(color);

// let age = 16;

// if(age >= 18){
//     console.log("vote");
    
// }else {
//     console.log("not vote");
// }


//odd or even

// let num = 10;
  
// if (num % 2 === 0) {
//     console.log("num, is even"); 
// } else{
//     console.log("num , is odd");
// }


// let mode = "silver";
// let color;
 

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";

// }else {
//     color = "white";
// }


// console.log(color);

// if (mode === "dark") {
//     console.log(mode);
// }


// let age = 25;

// // let result = age >= 18 ? "adult" : "not adult";
// // console.log(result);

// age>=18 ? console.log("adult") : console.log("not adult");

// alert("heloo");
// prompt("hello");

// let name = prompt ("hello ");
// console.log(name);



//***************/ Practice  Questions ***********

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


// Practice Question
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
 


// console.log("Prayojan Puri");
// console.log("Prayojan Puri");
// console.log("Prayojan Puri");
// console.log("Prayojan Puri");
// console.log("Prayojan Puri");
//to many line of code to print more than 100 
//to make it simple we are moving into loops

//************Loops In JavaScripts */

// for (let count = 1; count <= 5; count++) {
//    console.log("Prayojan Puri"); // 5 execute
   
// }

// console.log("loop has ended");


//print 1 to 5
//for (let count = 1; count <= 5; count ++){
// console.log("Prayojan Puri");

//}

//Calculate sum of 1 to 5 
// let sum = 0;
// for (let i = 1;i < 5;i++) {
//    sum = sum + 1;
// } 
//  console.log("sum =", sum);
//  console.log("Loop has ended");
 
//  for (let i = 1; i <= 5; i++) {
//    console.log("i = ", i); // 5 execute
// }

// console.log("i");


// loops 
// Infnite loop : A loop which never end

// for (let i = 1 ; i <= 5 ; i++) {
//    console.log("i =", i);
   
// }

//while loop

// let i = 1;
// while (i <= 10) {
//    console.log("i=",i);
//    i++;
   
// let i = 20;
//  while (i <= 10) {
//    console.log(i);
//  }

// let i = 20;
// do{
//   console.log("Prayojan Puri ");
//   i ++;
  
// }while (i<=10);
