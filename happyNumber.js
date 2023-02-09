/*
202. Happy Number
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:
Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Example 2:
Input: n = 2
Output: false
*/

// var isHappy = function(n) {
//     const set = new Set()
//     let sum = n
//     while(sum !== 1) {
//         let newSum = 0
//         sum.toString().split('').forEach(v => newSum += v * v)
//         if (set.has(newSum)) return false
//         set.add(newSum)
//         sum = newSum
//         console.log(set)
//     } 

//     return true 
// };

// Using memoization
var isHappy = function(n) {
    let interResults = new Set()
    while(!interResults.has(n)) {
        interResults.add(n)
        let temp = 0
        while(n) {
            temp += Math.pow(n % 10, 2)
            n = Math.floor(n / 10)
        }
        n = temp
        console.log(interResults)
    }

    return n === 1
};

console.log(isHappy(19))
// console.log(isHappy(7))