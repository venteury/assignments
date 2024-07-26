/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let pattern = /[a-z]/gi;
  let fs = "";
  let test = str.toLowerCase();
  test.split("").forEach((e) => {
    if (pattern.test(e)) {
      fs += e;
    }
  });
  return fs === fs.split("").reverse().join("");
}

module.exports = isPalindrome;
