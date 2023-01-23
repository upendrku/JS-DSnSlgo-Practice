/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, 
which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. The same principle applies to the number nine, 
which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

// const romanToInt = function (s) {
//     const keyMap = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000,
//     }
//     let integerVal = 0
//     for (let i = s.length - 1; i >= 0; i--) {
//         switch (s[i - 1]) {
//             case 'I':
//                 if (s[i] === 'V' || s[i] === 'X') {
//                     integerVal += keyMap[s[i]] - keyMap[s[i - 1]]
//                     i--
//                 } else {
//                     integerVal += keyMap[s[i]]
//                 }
//                 break;
//             case 'X':
//                 if (s[i] === 'L' || s[i] === 'C') {
//                     integerVal += keyMap[s[i]] - keyMap[s[i - 1]]
//                     i--
//                 } else {
//                     integerVal += keyMap[s[i]]
//                 }
//                 break;
//             case 'C':
//                 if (s[i] === 'D' || s[i] === 'M') {
//                     integerVal += keyMap[s[i]] - keyMap[s[i - 1]]
//                     i--
//                 } else {
//                     integerVal += keyMap[s[i]]
//                 }
//                 break;
//             default:
//                 integerVal += keyMap[s[i]]
//                 break;
//         }
//     }
//     return integerVal
// };

// Another nicer solution
const romanToInt = function (s) {
    const keyMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let integerVal = 0
    for (let i = 0; i < s.length; i++) {
        const cur = keyMap[s[i]]
        const next = keyMap[s[i + 1]]

        if (cur < next) {
            integerVal += next - cur
            i++
        } else {
            integerVal += cur
        }
    }
    return integerVal
}

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))