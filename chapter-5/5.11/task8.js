function formatDate(date) {
    
    let fromNow = new Date() - date;
    
    let toStr = date.toLocaleString();

    return fromNow < 1000 ? 'прямо сейчас' :
        ( fromNow = Math.trunc(fromNow / 1000) ) < 60 ? `${fromNow} сек. назад` :
        ( fromNow = Math.trunc(fromNow / 60) ) < 60 ?  `${fromNow} мин. назад` :
        toStr.slice(0, 6) + toStr.slice(8, 10) + toStr.slice(11,17);
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата 

console.log(formatDate(new Date(2022, 3, 1, 1, 2, 3)) )