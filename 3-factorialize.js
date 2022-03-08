// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

// O(n)
function factorialize(num) {
  if (num <= 1) {
    return 1
  }
  return factorialize(num - 1) * num;
}

factorialize(5);