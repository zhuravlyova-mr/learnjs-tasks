function getWeekDay(date) {
    let dayNames = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ','ПТ','СБ'];
    return dayNames[date.getDay(date)];
}

let date = new Date(2012, 0, 3); 

console.log( getWeekDay(date) );   