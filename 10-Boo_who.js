// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

// O(1)
function booWho(bool) {
  return typeof(bool) === "boolean" ? true : false;
}

console.log(booWho(null));