/* Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. 
If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; 
you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
Sample Output
[-1, 11] // the numbers could be in reverse order */

const twoNumberSum = (array, targetSum) => {
    const sortedArray = array.sort((a ,b) => a - b)
    // sorted array - [-4, -1, 1, 3, 5, 6, 8, 11]
    let result = []
    let leftIndex = 0, rightIndex = sortedArray.length -1
    while(leftIndex < rightIndex) {
        const currentSum = sortedArray[leftIndex] + sortedArray[rightIndex]
        if (currentSum === targetSum) {
            result.push(sortedArray[leftIndex], sortedArray[rightIndex])
        } else if (currentSum < targetSum) {
            leftIndex++
        } else if (currentSum > targetSum) {
            rightIndex--
        }
    }
    return result
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

