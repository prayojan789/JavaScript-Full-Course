// const student = {
//     fullName : "Prayojan Puri",
//     marks : 95.5,
//     printMarks : function(  ){
//         console.log("marks =", this.marks);

//     },
// };

// const employee = {
//     calTax() {
//         console.log("tax rate is 10%");

//     },
    // calctax2 :function(){
    //      console.log("tax rate is 10%");

    // }
// };

// const PrayojanPuri = {
//     salary: 50000,
//     calcTax(){
//         console.log("Tax rate is 20%");
//     }
// }

// const PrayojanPuri2 = {
//     salary: 50000,
// }

// const PrayojanPuri3 = {
//     salary: 50000,
// }

// const PrayojanPuri4748 = {
//     salary: 50000,
// }  

// PrayojanPuri.__proto__ = employee;
// PrayojanPuri2.__proto__ = employee;
// PrayojanPuri3.__proto__ = employee;
// PrayojanPuri4.__proto__ = employee;


//classes
// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new objects");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//     console.log("start");
//     } 
//     stop(){
//         console.log("stop");
//     }

//     // setBrand(brand){
//     //     this.brand = brand;
//     // }
// }

// let fortuner = new ToyotaCar("fortuner", 10); //constructor
// console.log(fortuner);

// // fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar("lexus",12);//constructor
// console.log(lexus);
// lexus.setBrand("lexus")0;


//********** */
//Inheritance 

// class Parent {
//     hello(){
//         console.log("hello");
        
//     }
// }

// class Child extends Parent {}
//     //  hello(){
//     //     console.log("hello");
        
//     // }
// let obj = new Child();

class Person {
    constructor() {
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
        
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}

class Enginner extends Person{
    work() {
        console.log("solve Problems, build somthing");
        
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}

let prayojanObj = new Enginner();