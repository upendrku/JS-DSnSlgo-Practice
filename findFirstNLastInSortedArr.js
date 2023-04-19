/*
34. Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position 
of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//     let first = -1
//     let last = -1

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             if (first === -1) {
//                 first = i
//             }
//             last = i
//         }
//     }
//     return [first, last]
// }

var searchRange = function (nums, target) {
    let low = 0, high = nums.length - 1
    let res = [-1, -1]

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) {
            res[0] = mid
            high = mid - 1
        } else if (target < nums[mid]) {
            high = mid - 1
        } else low = mid + 1
    }

    low = 0, high = nums.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) {
            res[1] = mid
            low = mid + 1
        } else if (target < nums[mid]) {
            high = mid - 1
        } else low = mid + 1
    }

    return res
};