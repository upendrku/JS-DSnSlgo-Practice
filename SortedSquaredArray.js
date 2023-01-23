/* Write a function that takes in a non-empty array of integers that are sorted in 
ascending order and returns a new array of the same length with the squares of the
original integers also sorted in ascending order.

Sample Input
array = [1, 2, 3, 5, 6, 8, 9]
Sample Output
[1, 4, 9, 25, 36, 64, 81] */

// O(nlogn)
function sortedSquaredArray(array) {
    return array.map((each) => each*each).sort((a,b) => a - b)
}

// O(n)
function sortedSquaredArray(array) {
    let smallestValIndex = 0
    let largestValIndex = array.length - 1
    let result = []
    for(let i = array.length - 1; i >= 0; i--) {
        const LastVal = array[largestValIndex]
        const FirstVal = array[smallestValIndex]
        if(Math.abs(FirstVal) > Math.abs(LastVal)) {
            result[i] = FirstVal * FirstVal
            smallestValIndex++
        } else {
            result[i] = LastVal * LastVal
            largestValIndex--
        }
    }
}

console.log(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]))