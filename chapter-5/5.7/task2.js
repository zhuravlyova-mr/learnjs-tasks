function aclean(arr) {
    let words = new Map();
    for (let elem of arr) {
        words.set(elem.toLowerCase().split('').sort().join(''), elem); 
    }
    return Array.from( words.values() );
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); 