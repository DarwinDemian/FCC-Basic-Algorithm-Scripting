// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. 
// For the purpose of this challenge, do not use the built-in .repeat() method.

// O(n*m)
function repeatStringNumTimes(str, num) {
  if (str.length <= 0 || num <= 0) return ""
  
  let arr = []

  while (num > 0) {
    arr.push(...str)
    num--
  }

  return arr.reduce((a,b)=>a+b);
}

// O(n)
const repeatStringNumTimes2 = (str, num) => {
  if (str.length <= 0 || num <= 0) return ""

  let string = str

  while (num > 1) {
    str += string;
    num--;
  }

  return str;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("a", 0));

console.log(repeatStringNumTimes2("a", 0));
console.log(repeatStringNumTimes2("abc", 3));