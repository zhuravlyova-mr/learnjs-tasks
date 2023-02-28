let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
console.log( sumSalaries(salaries) );

function sumSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}