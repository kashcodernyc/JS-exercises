function fibonacci(n) {
  const arr = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  return arr;
}

console.log(fibonacci(7));
// [0, 1, 1, 2, 3, 5, 8];
console.log(fibonacci(3));
// [0, 1, 1];
console.log(fibonacci(5));
// [0, 1, 1, 2, 3];
console.log(fibonacci(6));

// Big-O = O(n)

function recursiveFibonacci(n) {
  const arr = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  return arr[n];
}

console.log(recursiveFibonacci(6));
