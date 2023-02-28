function extractCurrencyValue(str) {
    return +str.substring(1);
}

console.log( extractCurrencyValue("$123123.34") );