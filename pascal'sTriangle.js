/*
118. Pascal's Triangle
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/

var generate = function(numRows) {
    let i = 0
    let result = []
    while(i < numRows) {
        let arr = []
        arr.push(1)
        for(let j = 1; j < i; j++) {
            arr.push(result[i - 1][j] + result[i - 1][j - 1])
        }
        if(i > 0) arr.push(1)
        result.push(arr)
        i++
    }
    return result
};

console.log(generate(5))