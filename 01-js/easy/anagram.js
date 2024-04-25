/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let temp1 = "",temp2 = "";
  str1.split(" ").map((str) => (temp1 += str));
  str2.split(" ").map((str) => (temp2 += str));
  return temp1.toLocaleLowerCase().split("").sort().join("") === temp2.toLocaleLowerCase().split("").sort().join("");
}

module.exports = isAnagram;
