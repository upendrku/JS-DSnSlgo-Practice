/*
7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
*/

var reverse = function(x) {
    const isNegative = x < 0
    let num = Math.abs(x)
    let reversedNum = 0
    while(num > 0) {
        const lastDigit = num % 10
        reversedNum *= 10 
        reversedNum += lastDigit 
        num = Math.floor(num / 10)
    }
    const result = isNegative ? reversedNum * -1 : reversedNum
    if (result < Math.pow(2, 31) * -1 || result > Math.pow(2, 31) - 1) return 0
    return result
};

console.log(reverse(-123))
console.log(reverse(0))