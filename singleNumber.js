/* 
136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0]
    let numsObj = {}
    for(let i = 0; i < nums.length; i++) {
        if(numsObj[nums[i]]) {
            numsObj[nums[i]] += 1 
        } else {
            numsObj[nums[i]] = 1
        }
    }
    return Object.keys(numsObj).find(num => numsObj[num] === 1)
};

// Using XOR operator
var singleNumberUsingXOR = function(nums) {
    let res = 0
    for (const num of nums) {
        res ^= num
    }
    return res
};

/*
Bitwise XOR (^)
The bitwise XOR (^) operator returns a 1 in each bit position for which the corresponding bits of either 
but not both operands are 1s.

a	b	a XOR b
0	0	   0
0	1	   1
1	0	   1
1	1	   0
*/

console.log(singleNumber([2,1,2,1,4]))