function getAverageAge(arr) {
    if (arr.length == 0) {
        return 0;
    }
    return Math.round( arr.reduce( (sum, user) => sum + user.age, 0 ) / arr.length );
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 28 };
let masha = { name: "Маша", age: 35 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );