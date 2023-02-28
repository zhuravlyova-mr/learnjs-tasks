let n = 10;
let j;
for (let i = 2; i <= n; ++i) {
   for (j = 2; j <= Math.sqrt(i); ++j) {
        if (i % j == 0)
           break;
   }
   if (j > Math.sqrt(i))
      alert(i);
}