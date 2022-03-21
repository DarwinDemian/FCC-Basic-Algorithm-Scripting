// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

// Write a function that splits an array (first argument) into groups the
// length of size (second argument) and returns them as a two-dimensional array.

// O(n)
const chunkArrayInGroups = (arr, size) => {
  let newArr = [[]];
  let currArr = 0;
  let sizeBuffer = size

  for (let i = 0; i < arr.length; i++) {
    if (i === size) {
      currArr++;
      size+=sizeBuffer
      newArr.push([])
    }

    newArr[currArr].push(arr[i]);
  }

  return newArr;
};

let arr = ["a", "b", "c", "d", "f", "g", "h", "i"]
console.log(chunkArrayInGroups(arr, 3));
