// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

/* 
  Create a function that looks through an array arr and 
  returns the first element in it that passes a 'truth test'. 
  This means that given an element x, the 'truth test' is passed if func(x) is true. 
  If no element passes the test, return undefined.
*/

// O(n)
function findElement(arr, func) {
  for (let num = 0; num < arr.length; num++) {
    if (func(arr[num]) === true) {
      return arr[num];
    }
  }

  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
