/*
228. Summary Ranges
You are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
That is, each element of nums is covered by exactly one of the ranges, and there is no 
integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 1) return [`${nums[0]}`]

    let result = []
    let i = 0, j = 1, temp

    while (i < j && j < nums.length) {
        if (nums[j - 1] + 1 === nums[j]) {
            temp = `${nums[i]}`
            j === nums.length - 1 && result.push(`${nums[i]}->${nums[j]}`)
            j++
        } else {
            temp ? result.push(`${nums[i]}->${nums[j - 1]}`) : result.push(`${nums[i]}`)
            temp = undefined
            j === nums.length - 1 && result.push(`${nums[j]}`)
            i = j, j++
        }
    }
    return result
};

// Cleaner solution
var summaryRanges = function (nums) {
    const result = [];
    let from = null, to = null;

    for (let i = 0; i < nums.length + 1; i++) {
        const num = nums[i];

        if (from === null) {
            from = num;
            to = num;
        } else if (to + 1 === num) {
            to = num;
        } else {
            result.push(from !== to ? `${from}->${to}` : `${from}`);
            from = num;
            to = num;
        }
    }

    return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))