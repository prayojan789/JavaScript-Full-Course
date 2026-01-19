// const URL = "https://cat-fact.herokuapp.com/facts"
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// // let promise = fetch(URL);
// // console.log(promise);

// // const getFacts = async () => {
// //     console.log("getting data ......");
// //     let response = await fetch(URL);
// //     console.log(response);   //JSON format
// //     let data = await response.json ();
// //     // console.log(data[0].text);
// //     factPara.innerText = data[1].text;
// //};


// function getFacts(){
//     fetch(URL)
//     .then((response) => {
//         return response.json() ;
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;

//     });
// }

// btn.addEventListener("click", getFacts);


//currency

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("from button");
const fromCurr = document.querySelector(".form select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
// let (code in countryList){
//     console.log(code);

// };
document.addEventListener("load", () => {
    updateExchangeRate();
})

for (let select of dropdowns) {
    for (code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "NR") {
            newOption.selected = "selected";
        }
        select.appendChild(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })

}

const updateFlag = () => {
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
     let img = element.parentElement.querySelector("img");
     img.src = newSrc;
  
}

btn.addEventListener("click", (evt) =>{
    evt.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate = asyc() => {
     let amount = document.querySelector(".amount input ");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1 ) {
        amtVal = 1;
        amount.value = "1";
    }


        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`;
        let respose = await fetch (URL);
        let data = await respose.json();
        let rate = data[toCurr.value.toLowerCase()];
        // console.log(rate);

         let finalAmount = amount * rate;
         msg.innerText =  `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.vale}`
}