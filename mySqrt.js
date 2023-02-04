/*
69. Sqrt(x)
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

var mySqrt = function(x) {
    // for(let i = 0; i <= x + 1; i++){
    //     if(i*i > x) {
    //         return i - 1;
    //     }
    // }

    //  Binary Search Solution
    if(x < 2) return x;

    let result = 0;
    let start = 1;
    let end = x/2; // 2

    while(start <= end){
        let mid = Math.floor(start + (end - start)/2); // 1 + 0.5 // 1 // 2
        let sqr = mid * mid;
        if(sqr == x) return mid;
        else if(sqr < x) { start = mid + 1; result = mid; } // start = 2, result = 1
        else end = mid - 1;
    }
    return result;
};

console.log(mySqrt(4))