// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

// O(n)
function findLongestWordLength(str) {
  let longest = 0;
  let curr = [];

  for (let i = 0; i < str.length; i++) {    
    if (str[i] !== " ") {
      curr.push(str[i]);
    } else {
      curr = []
    }

    if (curr.length > longest) {
        longest = curr.length;
      }
  }
  
  return longest;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");