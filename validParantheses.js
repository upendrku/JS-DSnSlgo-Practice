/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}

const isValid = function (s) {
    if (s.length % 2 === 1) return false
    if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (pairs[s[i]]) {
            stack.push(s[i]) // ([
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }
    }
    return stack.length === 0
};