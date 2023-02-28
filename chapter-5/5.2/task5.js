function randomInteger(min, max) {
    return Math.floor( Math.random() * (max + 1 - min) + min );
}

alert( randomInteger(1, 5) ); 
alert( randomInteger(2, 10) ); 
alert( randomInteger(3, 20) ); 
