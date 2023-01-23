/* 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

// Did not understood the question first - below solution looks for any matching words rather than prefix i.e. starting from
// const longestCommonPrefix = function(strs) {
//     const findCommonPrefix = (word1, word2) => {
//         let longestPrefix = ''
//         let totalIteration = word1.length > word2.length ? word2.length : word1.length
//         for(let i = 0; i < totalIteration; i++) {
//             if(word1[i] === word2[i]) {
//                 longestPrefix = longestPrefix + word1[i]
//             } else if(longestPrefix !== '') {
//                 break
//             }
//         }
//         return longestPrefix
//     }

//     let strsCopy = [...strs]

//     while(strsCopy.length !== 1) {
//         let i = 0
//         const matchingStr = findCommonPrefix(strsCopy[i], strsCopy[i + 1])
//         strsCopy = strsCopy.slice(2)
//         strsCopy.push(matchingStr) 
//     }

//     return strsCopy[0]
// };

var longestCommonPrefix = function(strs) {
    let prefix = ""
    if(strs === null || strs.length === 0) return prefix

    for (let i=0; i < strs[0].length; i++){ 
        const char = strs[0][i] // loop through all characters of the very first string. 

        for (let j = 1; j < strs.length; j++){ 
          // loop through all other strings in the array
            if(strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }

    return prefix
}

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["cir","car"]))
console.log(longestCommonPrefix(["aca","cba"]))