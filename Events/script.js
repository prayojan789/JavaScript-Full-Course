let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);  // 26
};

btn1.onclick = () => {
    console.log("HANDLER2");  
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");

};