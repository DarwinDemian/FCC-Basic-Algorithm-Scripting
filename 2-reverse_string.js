// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

// O(n)
function reverseString(str) {
  let reversed = "" 
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }

  return reversed;
}

reverseString("hello");