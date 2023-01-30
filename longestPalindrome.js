/*
5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
*/

/*
THEORY:
Palindrome can be identfied with two ways
    Inside -> Outward Check
    b   a   b
    <-- * -->
    Outside -> Inward Check
    b   a   b
    *--> <--*
And to palindromes in itself could be of two types
    Odd Palindrome - bab
    Even palindrome - bb
*/

// O(n^2)
const getPalindrome = (left, right, s) => {
    while(left >= 0 && right < s.length) { 
        if(s[left] !== s[right]) break;
        // Here we are using outward check
        left--; right++;
    }
    // here we are not doing right - 1 because slice method second argument is not inclusive of the last index 
    return [left + 1, right]
}
var longestPalindrome = function(s) {
    let max = [0, 1];
    for(let i = 0; i < s.length; i++) {
        // even palindromes
        let even = getPalindrome(i - 1, i, s);
        // odd palindromes
        let odd = getPalindrome(i - 1, i + 1, s);
        // if length of odd palindrome is greater update current max to length of odd one otherwise even one
        let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        // Now check if our initially assumed largest length palindrome is actually 
        // larger or not and update accordingly
        max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
    }

    return s.slice(max[0], max[1]);
}