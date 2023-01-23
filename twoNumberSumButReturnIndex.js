/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

// const twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// }

// const twoSum = function (nums, target) {
//     let arr = [...nums]
//     arr = arr.sort((a, b) => a - b)
//     let i = 0, j = arr.length - 1
//     let pair = [], result = []
//     while (i < j) {
//         if (arr[i] + arr[j] > target) {
//             j--
//         } else if (arr[i] + arr[j] < target) {
//             i++
//         } else {
//             pair.push(arr[i])
//             pair.push(arr[j])
//             break
//         }
//     }
//     if (pair) {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === pair[0] || nums[i] === pair[1]) {
//                 result.push(i)
//             }
//         }
//         return result
//     } else {
//         return 'No match found'
//     }
// }

const twoSum = function (nums, target) {
    let mp = {}
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (diff in mp) return [i, mp[diff]]
        mp[nums[i]] = i
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))

