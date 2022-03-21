// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

// Return true if the string in the first element of the array contains all of
// the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello
// does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in
// line are present in Alien.

// NOTE: For some god-forsaken compiler reason, this first solution doesn't
// work on freeCodeCamp, but both solutions work on Node.

// O(n)
const mutation = (arr) => {
  let lowArr = arr[0].toLowerCase();
  let newArr = lowArr.split(" ");
  let valid = {};

  console.log(newArr);
  for (let i = 0; i < newArr[0].length; i++) {
    valid[newArr[0][i]] = newArr[0][i];
  }

  console.log(valid)
  for (let i = 0; i < newArr[1].length; i++) {
    if (newArr[1][i] in valid === false) {
      return false;
    }
  }

  return true;
};

console.log("------------------------------");
console.log("        First Solution        ");
console.log("------------------------------");
console.log(mutation(["hello hello"]));
console.log(mutation(["hello hey"]));
console.log(mutation(["hello el"]));
console.log(mutation(["hello b"]));

// O(n)
function mutation2(arr) {
  let newArr1 = arr[0].toLowerCase();
  let newArr2 = arr[1].toLowerCase();
  let arr1 = newArr1.split(" ");
  let arr2 = newArr2.split(" ");

  let valid = {};

  console.log(arr1, arr2);
  for (let i = 0; i < arr1[0].length; i++) {
    valid[arr1[0][i]] = arr1[0][i];
  }

  for (let i = 0; i < arr2[0].length; i++) {
    if (arr2[0][i] in valid === false) {
      return false;
    }
  }

  return true;
}

console.log();
console.log("------------------------------");
console.log("       Second solution        ");
console.log("------------------------------");
console.log(mutation2(["Hello", "he"]));
console.log("------------------------------");
