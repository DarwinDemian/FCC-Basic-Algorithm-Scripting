// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

/* 
  Return the length of the longest word in the provided sentence.
  Your response should be a number.
*/

// O(n)
function findLongestWordLength(str) {
  let longest = 0;
  let curr = [];

  for (let i = 0; i < str.length; i++) {
    str[i] !== " " ? curr.push(str[i]) : (curr = []);

    if (curr.length > longest) {
      longest = curr.length;
    }
  }

  return longest;
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);

// O(n)
const findLongestWordLength2 = (str) => {
  let longest = 0;
  let newStr = str.split(" ");

  newStr.forEach((word) => {
    if (word.length > longest) {
      longest = word.length;
    }
  });

  return longest;
};

console.log(
  findLongestWordLength2(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
