/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false
//     let wordsObj1 = {}
//     let wordsObj2 = {}
//     let isAnagram = true
//     for(let i = 0; i < s.length; i++) {
//         wordsObj1[s[i]] = wordsObj1[s[i]] ? wordsObj1[s[i]] + 1 : 1
//     }
//     for(let i = 0; i < t.length; i++) {
//         wordsObj2[t[i]] = wordsObj2[t[i]] ? wordsObj2[t[i]] + 1 : 1
//     }
//     for(let i = 0; i < t.length; i++) {
//         if(wordsObj1[t[i]] !== wordsObj2[t[i]]) {
//             isAnagram = false
//         }
//     }
//     return isAnagram
// };

// Little better logic
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const charCount = {}
  
    for (const char of s) {
      charCount[char] = (charCount[char] || 0) + 1
    }
  
    for (const char of t) {
      if (!charCount[char] || charCount[char] === 0) return false
      charCount[char]--
    }
  
    return true
  };

console.log(isAnagram("anagram", "nagaram"))