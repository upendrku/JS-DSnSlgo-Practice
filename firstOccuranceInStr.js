/*
28. Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let possibleWords = {}
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let tempWord = haystack.slice(i, i + needle.length)
        if (!possibleWords[tempWord]) possibleWords[tempWord] = i + 1
    }
    return possibleWords[needle] ? possibleWords[needle] - 1 : -1
};

// Better solution
var strStr = function (haystack, needle) {
    const needleLength = needle.length
    if (needleLength === 0) return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needleLength) === needle) {
            return i
        }
    }
    return -1
}

console.log(strStr("sadbutsad", "sad"))