/*
67. Add Binary
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let pA = a.length - 1
    let pB = b.length - 1
    let carry = 0
    let str = ""

    while (pA >= 0 || pB >= 0) {
        const digA = pA < 0 ? 0 : parseInt(a.charAt(pA--))
        const digB = pB < 0 ? 0 : parseInt(b.charAt(pB--))

        const sum = digA + digB + carry
        const dig = sum % 2

        carry = Math.floor(sum / 2)
        str = dig + str
    }

    if (carry == 1) str = carry + str

    return str
};

console.log(addBinary("1010", "1011"))
console.log(addBinary("11", "1"))