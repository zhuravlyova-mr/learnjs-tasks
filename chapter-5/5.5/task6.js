function Calculator() {

    this.operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
    };
  
    this.calculate = function(str) {
      let wspace = str.split(' ');
      let a = +wspace[0];
      let op = wspace[1];
      let b = +wspace[2];
  
      if (!isFinite(a)  || !isFinite(b) || !this.operations[op]) {
        return NaN;
      }
  
      return this.operations[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.operations[name] = func;
    };
  }

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 5");
console.log( result ); 