/*
274. H-Index
Given an array of integers citations where citations[i] is the number of citations i researcher received for their ith paper, 
return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given 
researcher has published at least h papers that have each been cited at least h times.

Example 1:
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Example 2:
Input: citations = [1,3,1]
Output: 1

Constraints:
n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
// const hIndex = (citations) => {
//     citations.sort((a, b) => a - b) //
//     let i = citations.length

//     while (i > 0) {
//         const n = citations.filter(c => c >= i).length
//         if (n >= i) {
//             return i
//         } else {
//             i--
//         }
//     }
// }
var hIndex = function (citations) {
    let i = 0
    let j = citations.length - 1
    citations.sort((a, b) => b - a)
    while (i <= j) {
        let mid = i + Math.floor((j - i) / 2)
        if (citations[mid] > mid) i = mid + 1
        else j = mid - 1
    }
    return i
};



console.log(hIndex([3, 0, 6, 1, 5]))
console.log(hIndex([1, 3, 1]))
console.log(hIndex([1, 2, 4, 8, 9]))