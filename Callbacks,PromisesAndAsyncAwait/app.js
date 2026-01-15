// console.log("one");
// console.log("two");
// console.log("three");

// function hello() {
//     console.log("Hello");

// }


// console.log("one");
// console.log("two");

// setTimeout( () => {
//     console.log("hello");
//  }, 4000);  //timeout;

//  console.log("three");
//  console.log("four");

// function sum(a, b) {
//     console.log(a + b);

// }

// function calculator(a, b, sunCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2,(a,b) => {
//     console.log(a + b);
// });


// const hello = () => {
//     console.log("hello");
    
// };

// setTimeout(hello, 3000);

//nesting

// let age = 21;
// if (age >= 18) {
//     if (age >=60){
//         console.log("senior");
        
//     }else{
//         console.log("middle");
//     }
//     } else{
//         console.log("child");
//     }


// for (let i = 0; i < 5; i++){
//     let  str = "";
//     for (let j = 0; j < 5; j++){
//         str = str + j ;
//     }
//     console.log(i, str);
// }

// const getPromise = () => {
//     new Promise((resolve , reject) => {
//     console.log("I am a promise");
//     // resolve(success);
//     // reject("some error occurs");
//     // reject("error");
//     // reject("Network error");
// });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
    
// });
// promise.catch((err) => {
//     console.log("rejected" , err);
    
// });
 



// let promise = new Promise((resolve , reject) => {
//     console.log("I am a promise");
//     // resolve(success);
//     reject("some error occurs");

// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
            
//         }, 2000);
//     }) 
// }




// function getData(dataId, getNextData){ //2s
//    setTimeout(()=>{
//     console.log("data", dataId);
//     }, 2000)
// }

// //callback hell
//  getData(1, ()=> {
//     console.log("getting data2 .....");
     
//     getData(2, ()=>{
//        console.log("getting data3 .....");
        
//         getData(3, ()=>{
//             console.log("getting data4 .....");
//             getData(4);
//         })
//     });

// });

//  getData(1)
//  getData(2)
//  getData(3)
//data1
//data2
//data3
