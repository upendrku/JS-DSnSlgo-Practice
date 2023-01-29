/*
4. Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/


// var findMedianSortedArrays = function(nums1, nums2) {
//     const mergedArr = [...nums1, ...nums2].sort((a, b) => a - b)
//     const isTotalLengthOdd = (nums1.length + nums2.length) % 2 ? true : false
//     const middle = isTotalLengthOdd ? Math.floor((nums1.length + nums2.length) / 2) : (nums1.length + nums2.length) / 2
//     return isTotalLengthOdd ? mergedArr[middle] : (mergedArr[middle] + mergedArr[middle - 1]) / 2
// };

// Using Merge sort
var findMedianSortedArrays = function(nums1, nums2) {
    let p1 = 0, p2 = 0
    let mergedArr = []
    const totalLength = nums1.length + nums2.length

    if (totalLength === 0) {
        return null;
    }
    
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] <= nums2[p2]) {
            mergedArr.push(nums1[p1])
            p1++
        } else {
            mergedArr.push(nums2[p2])
            p2++
        }
    }
    while(p1 < nums1.length) {
        mergedArr.push(nums1[p1])
        p1++
    }

    while(p2 < nums2.length) {
        mergedArr.push(nums2[p2])
        p2++
    }

    const isOdd = totalLength % 2
    return isOdd ? mergedArr[(totalLength - 1) / 2] : (mergedArr[totalLength / 2] + mergedArr[((totalLength / 2) - 1)]) / 2
}

// console.log(findMedianSortedArrays([1,3], [2]))
// console.log(findMedianSortedArrays([1,3], [2, 7]))
console.log(findMedianSortedArrays([1,2], [3, 4]))