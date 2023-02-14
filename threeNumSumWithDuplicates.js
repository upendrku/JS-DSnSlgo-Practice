/*
15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = []
    nums = nums.sort((a, b) => a - b) // [-4, -1, -1, 0, 1, 2]
    for(let i = 0; i < nums.length - 2; i++) {
        let j = i + 1
        let k = nums.length - 1
        // to prevent duplicates
        if (nums[i] === nums[i - 1]) continue
        
        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if(sum === 0) {
                result.push([nums[i], nums[j], nums[k]])
                // to prevent duplicates - start
                while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--
                // end
                j++, k--
            } else if (sum < 0){
                j++
            } else {
                k--
            }
        }
    }
    return result
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))