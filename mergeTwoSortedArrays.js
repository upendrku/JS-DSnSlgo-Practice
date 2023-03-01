/*
88. Merge Sorted Array
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

// function merge(nums1, m, nums2, n) {
//     let insertPositionOfNums1 = m + n - 1 // 5
//     m-- // 2
//     n-- // 2
//     while (n >= 0) {
//         if (nums1[m] > nums2[n]) {
//             nums1[insertPositionOfNums1] = nums1[m]
//             m--
//         } else {
//             nums1[insertPositionOfNums1] = nums2[n]
//             n--
//         }
//         insertPositionOfNums1--
//         // console.log(nums1)
//     }
//     return nums1
// }

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let first = m - 1
    let second = n - 1
    let i = m + n - 1

    while (second >= 0) {
        let fVal = nums1[first]
        let sVal = nums2[second]

        console.log(fVal)
        console.log(sVal)
        console.log('.......')
        if (fVal > sVal) {
            nums1[i] = fVal
            i--
            first--
        } else {
            nums1[i] = sVal
            i--
            second--
        }
    }
}

// console.log(merge([2, 5, 6], 3, [1, 2, 3, 0, 0, 0], 3))
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// [ 1, 2, 3, 0, 0, 6 ]
// [ 1, 2, 3, 0, 5, 6 ]
// [ 1, 2, 3, 3, 5, 6 ]
// [ 1, 2, 2, 3, 5, 6 ]
// [ 1, 2, 2, 3, 5, 6 ]