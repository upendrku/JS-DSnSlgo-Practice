/* 
17. Letter Combinations of a Phone Number
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
*/

var letterCombinations = function(digits) {
    if (digits === "") return []
    const keyMap = {
        2: 'abc',
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    const generateCombinations = (digits) => {
        if (digits.length === 1) return keyMap[digits[0]].split("")
        const output = []
        const firstNo = Number(digits[0])
        const others = generateCombinations(digits.slice(1))
        for(let i = 0; i < keyMap[firstNo].length; i++) {
            for(j = 0; j < others.length; j++) {
                output.push(keyMap[firstNo][i] + others[j])
            }
        }
        return output
    }

    return generateCombinations(digits)
};

console.log(letterCombinations("234"))