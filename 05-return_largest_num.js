// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

/* 
  Return an array consisting of the largest number from each provided sub-array. 
  For simplicity, the provided array will contain exactly 4 sub-arrays. 
  Remember, you can iterate through an array with a simple for loop, 
  and access each member with array syntax arr[i].
*/

// O(n)
function largestOfFour(arr) {
  let newArr = [];
  arr.forEach((num) => newArr.push(Math.max(arr[num])));

  return newArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
