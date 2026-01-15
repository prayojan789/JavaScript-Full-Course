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

function getData(dataId){ //2s
   setTimeout(()=>{
    console.log("data", dataId);
    }, 2000)
}
 getData(1)
 getData(2)
 getData(3)
//data1
//data2
//data3
