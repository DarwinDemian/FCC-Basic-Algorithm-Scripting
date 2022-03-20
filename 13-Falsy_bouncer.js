// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

// O(n)
const bouncer = (arr) => {
  const lookup = {
    "": false,
    null: false,
    0: false,
    NaN: false,
    undefined: false,
    false: false
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in lookup) {
      arr.splice(i, 1)
      i--
    }
  }

  return arr
}

console.log(
  bouncer([7, "ate", "", false, 9]),
  bouncer([false, null, 0, NaN, undefined, ""])
)

