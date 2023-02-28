function getLocalDay(date) {
    let dayOfWeek = date.getDay();
    return dayOfWeek == 0 ? 7 : dayOfWeek;
}

let date = new Date(2012, 0, 8);  //Sunday - 7
console.log( getLocalDay(date) );   