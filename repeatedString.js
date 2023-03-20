/*
There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, 
find and print the number of letter a's in the first n letters of the infinite string.

Example
s = 'abcac'
n = 10

The substring we consider is abcacabcac, the first 10 characters of the infinite string. There are 4 occurrences 
of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns

int: the frequency of a in the substring
Input Format

The first line contains a single string, s.
The second line contains an integer, n.
*/

function repeatedString(s, n) {
    let noOfA = 0
    let noOfRepeatition = Math.floor(n / s.length)
    let noOfOddChars = n % s.length

    s.split('').forEach((ch) => {
        if (ch === 'a') {
            noOfA += 1
        }
    })

    noOfA *= noOfRepeatition

    if (noOfOddChars) {
        s.substr(0, noOfOddChars).split('').forEach((ch) => {
            if (ch === 'a') {
                noOfA += 1
            }
        })
    }

    return noOfA
}

console.log(repeatedString('aba', 10))
console.log(repeatedString('a', 1000000000000))