/*
70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

function climbStairs(n) {
    if (n <= 3) {
        return n
    }
    let result = [1, 2, 3]
    for (let index = 3; index < n; index++) {
        result.push(result[index - 1] + result[index - 2])
    }
    return result[result.length - 1]
}

console.log(climbStairs(2))
console.log(climbStairs(3))