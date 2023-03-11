/*
383. Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters 
from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false
    }

    let magChars = {}
    for (let i = 0; i < magazine.length; i++) {
        magChars[magazine[i]] = magChars[magazine[i]] ? magChars[magazine[i]] + 1 : 1
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (magChars[ransomNote[i]]) {
            magChars[ransomNote[i]]--
        } else {
            return false
        }
    }
    return true
};

// Another solution
var canConstruct = function (toConstruct, magazine) {
    for (let i = 0; i < magazine.length; i++) {
        if (!toConstruct) {
            return true
        }

        toConstruct = toConstruct.replace(magazine[i], '')
    }

    return !toConstruct
};

console.log(canConstruct("a", "b"))
console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))