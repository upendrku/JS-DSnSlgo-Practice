/*
74. Search a 2D Matrix
You are given an m x n integer matrix with the following two properties:
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let i = 0

    while (i < matrix.length) {
        let arr = matrix[i]
        let left = 0, right = arr.length - 1, middle = Math.floor((left + right) / 2)
        if (target >= arr[left] && target <= arr[right]) {
            while (arr[middle] !== target && left <= right) {
                if (target < arr[middle]) {
                    right = middle - 1
                } else {
                    left = middle + 1
                }
                middle = Math.floor((left + right) / 2)
            }
            return arr[middle] === target
        } else {
            i++
        }
    }
    return false
};

// Best solution
function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false

    let row = 0
    let col = matrix[0].length - 1

    while (col >= 0 && row <= matrix.length - 1) {
        if (matrix[row][col] === target) return true
        else if (matrix[row][col] > target) col--
        else if (matrix[row][col] < target) row++
    }

    return false
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))