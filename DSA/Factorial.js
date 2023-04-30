function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4)); //24
console.log(factorial(5)); //120
