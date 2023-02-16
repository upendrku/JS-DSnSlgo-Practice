/*
29. Divide Two Integers
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be 
truncated to 8, and -2.7335 would be truncated to -2.
Return the quotient after dividing dividend by divisor.
Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: 
[−2^31, 2^31 − 1]. For this problem, if the quotient is strictly greater than 2^31 - 1, then return 2^31 - 1, and if the 
quotient is strictly less than -2^31, then return -2^31.

Example 1:
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.

Example 2:
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function (dividend, divisor) {
    const isNegative = dividend < 0 && divisor < 0 ? false : dividend < 0 || divisor < 0
    if(dividend < 0) dividend = dividend * -1
    if(divisor < 0) divisor = divisor * -1
    
    if(dividend === 1 && divisor === 1) return isNegative ? -1 : 1

    let ret = 0
    while (divisor <= dividend) {
        let value = divisor
        let multiple = 1
        while (value + value <= dividend) {
            value += value
            multiple += multiple
        }
        dividend = dividend - value
        ret += multiple
    }
    
    if (ret > ((2**31) - 1)) {
        return isNegative ? -(2**31) : 2**31 - 1
    }

    return isNegative ? ret * -1 : ret
};

// It can be solved in a better way by using bitwise operator with O(log n) time complexity
// Bur for now having this solution. 

console.log(divide(1, 1))