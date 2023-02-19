/*
35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// O(n)
var searchInsert = function (nums, target) {
    const middle = Math.floor(nums.length / 2)
    let idx
    if (target > nums[middle]) {
        for (let i = middle + 1; i < nums.length; i++) {
            if (nums[i] === target || nums[i] > target) {
                idx = i
                break
            }
        }
        if (idx === undefined) idx = nums.length
    } else {
        for (let i = middle; i >= 0; i--) {
            if (nums[i] === target) {
                idx = i
                break
            } else if (nums[i] < target) {
                idx = i + 1
                break
            }
        }
        if (idx === undefined) idx = 0
    }
    return idx
};

// O(log n)
var searchInsert = function (nums, target) {
    let lo = 0
    let hi = nums.length

    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2)

        if (nums[mid] === target) {
            return mid
        }

        if (nums[mid] > target) {
            hi = mid
        } else {
            lo = mid + 1
        }
    }

    return lo
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5], 4))