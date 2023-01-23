/* 
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change
(the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique 
(i.e., you can have multiple coins of the same value).

For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. 
If you're given no coins, the minimum amount of change that you can't create is 1.

Sample Input
coins = [5, 7, 1, 1, 2, 3, 22]
Sample Output
20
*/

// nlog(n)
function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b) // [1,1,2,3,5,7,22]
    let currentPossibleChange = 0
    for (const coin of coins) {
        if (coin > currentPossibleChange + 1) return currentPossibleChange + 1

        currentPossibleChange += coin
        // console.log(currentPossibleChange) [1,2,4,7,12,19,20]
    }
    return currentPossibleChange + 1
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))