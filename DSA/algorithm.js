// Write a function that takes two parameters: a string and a number. The function should return the string rotated to the right by the given number of characters. For example, if the string is "hello" and the number is 2, the function should return "lohel".

function rotate(str, num) {
  const len = str.length;
  if (num >= len || num < 1) {
    return str;
  }
  const rotated = str.slice(len - num) + str.slice(0, len - num);

  return rotated;
}

console.log(rotate("hello", 2)); // "lohel"
console.log(rotate("jackson", 3)); // "sonjack"

// Write a function that takes two arrays of integers and returns a new array with the union of the two arrays, sorted in ascending order. For example, if the two input arrays are [1, 3, 2, 5] and [4, 6, 7], the function should return [1, 2, 3, 4, 5, 6, 7].

function unionOfTwoArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))].sort();
}

console.log(unionOfTwoArrays([1, 3, 2, 5], [4, 6, 7])); // [1, 2, 3, 4, 5, 6, 7]

// Write a function that takes a string and returns a new string with the characters in reverse order, but with each word itself still in the same order. For example, if the input string is "hello world", the function should return "olleh dlrow".
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("hello world")); // olleh dlrow
console.log(reverseWords("the rock")); // eht kcor

// Write a function that takes an array of integers and returns the number of distinct pairs of integers that sum up to a given target value. For example, if the input array is [1, 2, 3, 4, 5] and the target value is 5, the function should return 2, because there are two pairs of integers that sum up to 5: (1, 4) and (2, 3).

function distinctPairs(arr, target) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    arr.forEach((num) => {
      if (num + arr[i] === target) {
        result += 1;
      }
    });
  }
  return result;
}

console.log(distinctPairs([1, 2, 3, 4, 5], 5));

// Write a function that takes an array of numbers and returns the largest sum that can be obtained by concatenating the numbers in any order. For example, if the input array is [10, 20, 30], the function should return 302010, because the largest sum can be obtained by concatenating the numbers in the order 30, 20, 10.

function largestSum(arr) {
  const result = arr.sort((a, b) => b.toString()[0] - a.toString()[0]).join("");
  return parseInt(result);
}

console.log(largestSum([10, 20, 30, 4])); // 4302010
console.log(largestSum([50, 2, 1, 9])); //95021

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

var maximumWealth = function (accounts) {
  const result = [];
  for (let i = 0; i < accounts.length; i++) {
    const addedValues = accounts[i].reduce((acc, cur) => acc + cur);
    result.push(addedValues);
  }
  return Math.max(...result);
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); // 6
