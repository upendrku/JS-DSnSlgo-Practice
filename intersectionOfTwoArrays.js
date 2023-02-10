/*
350. Intersection of Two Arrays II
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

var intersect = function(nums1, nums2) {
    let nums1Obj = {}
    for (let i = 0; i < nums1.length; i++) {
        nums1Obj[nums1[i]] = (nums1Obj[nums1[i]] || 0) + 1
    }
    let result = []
    for(let i = 0; i < nums2.length; i++) {
        if(nums1Obj[nums2[i]]) {
            result.push(nums2[i])
            nums1Obj[nums2[i]] -= 1
        }
    }
    return result
};

console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))
