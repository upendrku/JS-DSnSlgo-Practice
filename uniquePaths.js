/*
62. Unique Paths

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//     let grid = new Array(m).fill(0).map(x => new Array(n).fill(0));
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === 0 || j === 0) {
//                 grid[i][j] = 1;
//             } else {
//                 grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
//             }
//         }
//     }

//     return grid[m - 1][n - 1];
// }

var uniquePaths = function (m, n) {
    const grid = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
    function helper(i, j) {
        if (i === m - 1 && j === n - 1) return 1;
        if (i >= m || j >= n) return 0;
        if (grid[i][j] !== -1) return grid[i][j];

        return grid[i][j] = helper(i, j + 1) + helper(i + 1, j);
    }
    return helper(0, 0);
};

console.log(uniquePaths(3, 2))