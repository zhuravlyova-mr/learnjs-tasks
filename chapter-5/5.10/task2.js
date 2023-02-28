function topSalary(salaries) {
    let employees = Object.entries(salaries);
    let maxSalary = 0, maxEmployee = null;
    
    for (let [employee, salary] of employees) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxEmployee = employee;
        }
    }

    return maxEmployee;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( topSalary(salaries) );