/*
125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

var isPalindrome = function(s) {
    const regexPattern = /[^A-Za-z0-9]/g;
    const str = s.replace(regexPattern, "")
    console.log(str)
    let left = 0, right = str.length - 1
    let isPalindrome = true
    while(left < right) {
        if(str[left].toLowerCase() !== str[right].toLowerCase()) {
            isPalindrome = false
        }
        left++
        right--
    }
    return isPalindrome
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))
console.log(isPalindrome("ab_a"))