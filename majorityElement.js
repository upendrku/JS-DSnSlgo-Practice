/* 
169. Majority Element
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
    if(nums.length === 1) return nums[0]
    const numsObj = {}
    for(let i = 0; i < nums.length; i++) {
        if(numsObj[nums[i]]) {
            numsObj[nums[i]] += 1
        } else {
            numsObj[nums[i]] = 1
        }
    }
    return Object.keys(numsObj).find(num => numsObj[num] > nums.length / 2)
};

console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,2,3]))