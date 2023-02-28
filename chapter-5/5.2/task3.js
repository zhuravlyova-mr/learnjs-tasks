function readNumber() {
    let r;
    do {
      r = prompt("Введите число", "");
    } while ( !(isFinite(r)) );
    if (r === null || r === "") {
        return null;
    }
    return +r;
}

alert( readNumber() );