function checkSpam(str) {
    let strL = str.toLowerCase();
    return ( strL.indexOf("viagra", 0) != -1 || 
             strL.indexOf("xxx", 0) != -1 )
}

console.log( checkSpam("") );
console.log( checkSpam("spaminthemiddleviagraaha") );
console.log( checkSpam("spamintailXXX") );
console.log( checkSpam("withoutspam") );
console.log( checkSpam("sfXXXviagra") );