// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence//

/*
  Return the provided string with the first letter of each word capitalized. 
  Make sure the rest of the word is in lower case.
  For the purpose of this exercise, 
  you should also capitalize connecting words like the and of.
*/

// O(n)
function titleCase(str) {
  let newStr = "";

  for (let i in str) {
    i == 0 || str[i - 1] == " "
      ? (newStr += str[i].toUpperCase())
      : (newStr += str[i].toLowerCase());
  }

  return newStr;
}

console.log(titleCase("i'm a little tea pot"));
