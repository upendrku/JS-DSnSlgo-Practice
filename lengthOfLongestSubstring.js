/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(str) {
    let firstChrIdx = 0
    let longestSubStrChars = {}
    let longestSubStrLength = 0
    if(str.length <= 1) return str.length
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if(longestSubStrChars[ch] >= firstChrIdx){
            firstChrIdx = longestSubStrChars[ch] + 1
        }
        longestSubStrChars[ch] = i
        longestSubStrLength = Math.max(longestSubStrLength, i - firstChrIdx +  1)
      }  
    return longestSubStrLength
};


console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
