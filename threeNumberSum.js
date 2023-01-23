/* 
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
The function should find all triplets in the array that sum up to the target sum and return a two-dimensional 
array of all these triplets. The numbers in each triplet should be ordered in
ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
If no three numbers sum up to the target sum, the function should return an empty array.

Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6] // -8 -6 1 2 3 5 6 12
targetSum = 0
Sample Output
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
*/

// Wrong Solution
// Tried to do it with O(n) but here we are loosing possible matches 
// function threeNumberSum(array, targetSum) {
//     array.sort((a, b) => a - b)
//     let i = 0
//     let j = array.length - 1
//     let result = []
//     while(i < array.length || j >= 0) {
//         if(array[i] + array[j] < targetSum && array.indexOf(targetSum - (array[i] + array[j]))) {
//             result.push([array[i], array[j], targetSum - (array[i] + array[j])].sort((a, b) => a - b))
//             i++, j--
//         } else if(array[i] + array[j] > targetSum) {
//             j--
//         } else if(array[i] + array[j] < targetSum) {
//             i++
//         }
//     }
//     return result
// }

// O(n^2)
function threeNumberSum(arr, target) {
    arr.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];
            if (currentSum === target) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } else if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            }
        }
    }
    return result; 
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))