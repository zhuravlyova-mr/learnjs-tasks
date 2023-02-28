function pow(x, n) {
  result = 1; 
  for (let i = 1; i <= n; ++i) {
    result *= x;
  }
  return result;
}

let x = prompt("x:", 4);
let n = prompt("n:", 5);
if (n < 1)
  alert("Степень должна быть натуральным числом");
else
  alert(pow(x,n));