// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

// O(n)
// first solution
function confirmEnding(str, target) {  
  let newStr = [...str]
  let strr = newStr.splice(str.length - target.length, target.length)

  for (let i in strr) {
    if (strr[i] !== target[i]) {
      return false
    } 
  }

  return true
}

// O(n)
// second solution 
const confirmEnding2 = (str, target) => {
  for (let i = str.length - target.length; i < str.length; i++) {
    if (str[i] !== target[target.indexOf(str[i])]) {
      return false
    }
  }

  return true
}

// O(1)
// third solution
const confirmEnding3 = (str, target) => str.slice(-target.length) === target;

console.log(confirmEnding("Bastian", "ian"), confirmEnding("Bastian", "bas"));
console.log(confirmEnding2("Bastian", "ian"), confirmEnding2("Bastian", "bas"));
console.log(confirmEnding3("Bastian", "ian"), confirmEnding3("Bastian", "bas"));