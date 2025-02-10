    const convertButton = document.querySelector(".convert-button")
    const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrency").value //input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueToConverted = document.querySelector(".currency-value") //Moedas convertidas

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 97.550
    const libraToday =  0.1398



    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

}

    if (currencySelect.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-De", {
           style: "currency",
           currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
}

    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP"
}).format(inputCurrencyValue / libraToday)

}

    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) //formatação de números sensível ao idioma.


}

function changeCurrency() {
    
    const currecyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

   
    if (currencySelect.value == "dolar") {
        currecyName.innerHTML = "Dólar USD"
        currencyImage.src = "./assets/dólar.png"
}
        
    if (currencySelect.value == "euro") {
        currecyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
}

    if (currencySelect.value == "bitcoin") {
        currecyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
}
    
    if (currencySelect.value == "libra") {
        currecyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
}

convertValues()

}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
