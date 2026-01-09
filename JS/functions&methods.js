// console.log("Hello");

// "abc".toUpperCase();

// [1,2,3].push(4);

// function myFunction() {
//     console.log("Welcome to my Channel!");
//     console.log("We are learning JavaScript :) ");
    
    
// }
// myFunction();
// myFunction(); 


// function myFunction(msg, n){
    //parameter -> input 
//     console.log(msg * n);
// }
// myFunction("My name is Prayojan");// argument


//Function -> 2 numbers, sum

// function sum(x , y ){

//     console.log(x+y);
//     sum = x + y;
    // console.log("before return");
    
    // return sum;
    // console.log("after return");// won't execute
    
// }
// let val = sum(3 , 4);
// console.log(val);


//sum function 
// function sum (a,b){
//     return a+b;
// }

// const x =5;

// const arrowSum = (a,b) =>{
//     console.log(a + b);
    
// };

//multiplication function 
// function mul(a,b){
//     return a * b;
// }


// const arrowMul = (a,b) =>{
//     console.log(a*b);
    
// };

// const printHrllo = () => {
//     console.log("hello");
// }


// [1,2,3].toUpperCase()

// function abc(){
//     console.log("Hello");
    
// }

// function myFunc(){
//     return abc;
// }

//A callback is a function passed as an argument to another function.

// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){  //value at each index
//     console.log(val);
    
// });


// let arr = ["Kathmandu", "Pokhara", "Chitwan"];
// arr.forEach((val) => {
//     console.log(val.toLowerCase());
    
// });


// let arr = ["Kathmandu", "Pokhara", "Chitwan"];
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
    
// });

//A callback is a function passed as an argumet to another function.

// let nums = [67,52, 39];

// let newArr = nums.map((val) => {
//     // console.log(val);
//     return val * 2;
    
// });

// console.log(newArr);


// let calcSquare = (num) => {
//     console.log(num * num);
    
// }


// let arr = [1,2,3,4,5,6,7,8,9,10];

// let evenArr= arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr);


// let evenArr= arr.filter((val) => {
//     // return val % 2 !== 0;
//     return val > 3;
// });

// console.log(evenArr);


//Reduce - Performs some operations & reduce the arrat to a single. It returns that single value. 

// let arr = [1,2,3,4];

// const output = arr.reduce((res, curr) => {
//     return res + curr;  
// });

// console.log(output);

// let arr = [5,6,2,1,101,3];

// const output = arr.reduce((prev, curr) => {
//     return prev < curr ? prev : curr ;
// });

// console.log(output);
