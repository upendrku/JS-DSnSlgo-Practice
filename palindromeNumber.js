/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

const isPalindrome = function(x) {
    const numStr = String(x)
    let i = 0, j = numStr.length - 1
    let isPalindrome = true
    while(i < j) {
        if(numStr[i] !== numStr[j]) {
            isPalindrome = false
            break
        } else {
            i++, j--
        }
    }
    return isPalindrome
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))