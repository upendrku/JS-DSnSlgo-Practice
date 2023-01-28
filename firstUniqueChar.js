/*
First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
*/

var firstUniqChar = function(s) {
    let chars = {}
    for(let i = 0; i < s.length; i++) {
        if(!chars[s[i]]) {
            chars[s[i]] = i + 1
        } else {
            chars[s[i]] = -1
        }
    }
    for(ch in chars) {
        if(chars[ch] !== -1) {
            return chars[ch] - 1
        }
    }
    return -1
};

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))