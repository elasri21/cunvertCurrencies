function changeCurrency() {
    fetch("https://api.currencyfreaks.com/latest?apikey=c616253e6ab14a1ca6c7998dedeaeaaf")
.then((result) => {
    // console.log(result);
    let data = result.json();
    // console.log(data);
    return data;
}).then((currency) => {
    // console.log(currency.rates);
    let amountOfDollar = +(document.querySelector(".dollar input").value);
    let changeTo = document.querySelector(".change-to input").value.toUpperCase();
    let currencyNeeded = document.querySelector(".currency-needed");
    currencyNeeded.innerHTML = changeTo;
    let converted = document.querySelector(".currency span");
    converted.innerHTML = (amountOfDollar * currency.rates[changeTo]).toFixed(2);
    // console.log(currency.rates["MAD"])
});
}
let calculateBtn = document.querySelector(".calculate button");
calculateBtn.addEventListener("click", changeCurrency)