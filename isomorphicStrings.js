/*
205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving 
the order of characters. No two characters may map to the same character, but a character may map to itself.


Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
            return false
        }
    }
    return true
}

/*
indexOf(searchElement)
indexOf(searchElement, fromIndex)

Parameters:

searchElement
Element to locate in the array.

fromIndex Optional
Zero-based index at which to start searching, converted to an integer.

Negative index counts back from the end of the array — if fromIndex < 0, fromIndex + array.length is used. Note, the array is still searched from front to back in this case.
If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.
If fromIndex >= array.length, the array is not searched and -1 is returned.
Return value
The first index of the element in the array; -1 if not found.
*/