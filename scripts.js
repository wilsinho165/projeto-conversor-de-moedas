const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValue(){
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
  
    
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.4
    const bitcoinToday = 397.116


if(currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue/dolarToday)
}   
if(currencySelect.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue/euroToday)
}
if(currencySelect.value =="libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("GBP", {
        style:"currency",
        currency: "GBP"
    }).format(inputCurrencyValue/libraToday)
}
if(currencySelect.value =="bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
        style: "currency",
        currency: "BTC"    
    }).format(inputCurrencyValue/bitcoinToday)
}

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
  }).format(inputCurrencyValue)
  
  

}



convertButton.addEventListener("click", convertValues) 

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
  
   

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.4
    const bitcoinToday = 397.116


  const convertedValue = inputCurrencyValue / dolarToday

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
  }).format(inputCurrencyValue)
  
  
  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
  }).format(convertedValue)


  currencyValueConverted.innerHTML = new Intl.NumberFormat("EUR", {
      style: "currency",
      currency: "EUR"
  }).format(convertedValue)


  currencyValueConverted.innerHTML = new Intl.NumberFormat("GBP", {
      style: "currency",
      currency: "GBP"    
  }).format(convertedValue)


  currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
    style: "currency",
    currency: "BTC"    
}).format(convertedValue)
}


function changeCurrency() {
   const currencyName = document.querySelector("#currency-name")
   const currencyImage = document.querySelector(".currency-img")





if (currencySelect.value == "dolar"){
  currencyName.innerHTML = "Dólar americano"
  currencyImage.src ="./assets/dolar-img-pequena-2.png"
}
if (currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src ="./assets/euro-azul.png"
  }

if (currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra esterlina"
    currencyImage.src ="./assets/libra-1-logo.png"
  }

if (currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src ="./assets/bitcoin-1-logo.png"
  }

}




currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue) 