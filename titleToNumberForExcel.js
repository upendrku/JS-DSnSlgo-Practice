/* 
171. Excel Sheet Column Number
Given a string columnTitle that represents the column title as appears in an Excel sheet, 
return its corresponding column number.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 
Example 1:
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28 // 26 + 2

Example 3:
Input: columnTitle = "ZY"
Output: 701 // ZA => (26 * 26) +25
*/

// NOTE: character.charCodeAt(0) - 65 // gives index of a alphabet

// var titleToNumber = function(columnTitle) {
//     if(columnTitle.length === 1) return columnTitle.charCodeAt(0) - 64
//     let num = columnTitle[columnTitle.length - 1].charCodeAt(0) - 64
//     for(let i = 0; i < columnTitle.length - 1; i++) {
//         num += Math.pow(26, columnTitle.length - (i + 1)) * (columnTitle[i].charCodeAt(0) - 64)
//     }
//     return num
// };

// Better logic
var titleToNumber = function(columnTitle) {
    let num = 0
    for(let i = 0; i < columnTitle.length; i++){
        num = num * 26 + (columnTitle.charCodeAt(i) - 64)
    }
    return num
};

console.log(titleToNumber("ZY"))
console.log(titleToNumber("AB"))
console.log(titleToNumber("A"))
console.log(titleToNumber("FXSHRXW"))