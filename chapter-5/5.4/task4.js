function sumInput() {
    let myArray = [];
    let num;
    for (let i = 0; ; ++i) {
      num = prompt("Введите число", "");
      if (!isFinite(num) || num == '' || num == null) {
         break;
      }
      myArray[i] = +num;
    }
    let sum = 0;
    for (num of myArray) {
      sum += num;
    }
    return sum;
}

alert( sumInput() );
