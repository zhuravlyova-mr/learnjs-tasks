function getMaxSubSum(arr) {
  let maxSum = 0;
  let sum = 0;
  for (let num of arr) {
    sum = Math.max(sum + num, 0);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100