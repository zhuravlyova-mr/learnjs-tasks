function sumSalaries(salaries) {
    let salaryValues = Object.values(salaries);
    let sum = 0;
    for (let salary of salaryValues) {
        sum += salary;
    }
    return sum;
    //return Object.values(salaries).reduce((sum, elem) => sum + elem, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
  console.log( sumSalaries(salaries) );