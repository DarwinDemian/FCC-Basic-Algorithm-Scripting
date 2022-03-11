// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

/* 
  Truncate a string (first argument) if it is longer than the given
  maximum string length (second argument).
  Return the truncated string with a ... ending.
*/

// O(1)
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  let string = [...str];
  let newString = string.splice(0, num).join("") + "...";

  return newString;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
