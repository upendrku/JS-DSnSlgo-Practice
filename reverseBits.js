/*
190. Reverse Bits
Reverse bits of a given 32 bits unsigned integer.
Note:
Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output 
will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary 
representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, 
the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 

Example 1:
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, 
so return 964176192 which its binary representation is 00111001011110000010100101000000.

Example 2:
Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, 
so return 3221225471 which its binary representation is 10111111111111111111111111111111.
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res = (res << 1) | (n & 1);
        n >>= 1;
    }
    return res >>> 0;
};

console.log(reverseBits(00000010100101000001111010011100))

/*
NOTE: 
Left shift (<<)
const a = 5;         // 00000000000000000000000000000101
const b = 2;         // 00000000000000000000000000000010

console.log(a << b); // 00000000000000000000000000010100

Unsigned right shift (>>>)
const a = 5;          //  00000000000000000000000000000101
const b = 2;          //  00000000000000000000000000000010
const c = -5;         //  11111111111111111111111111111011

console.log(a >>> b); //  00000000000000000000000000000001
// Expected output: 1

console.log(c >>> b); //  00111111111111111111111111111110
// Expected output: 1073741822

Right shift assignment (>>=)
let a = 5;      //  00000000000000000000000000000101

a >>= 2;        //  00000000000000000000000000000001
console.log(a);
// Expected output: 1

let b = -5;     //  11111111111111111111111111111011

b >>= 2;        //  11111111111111111111111111111110
console.log(b);
// Expected output: -2
*/