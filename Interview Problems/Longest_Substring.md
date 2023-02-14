Longest Subtring | Walmart Interview Question
Find the longest substring with k unique characters in a given string



Given a string you need to print the longest possible substring that has exactly k unique characters. If there is more than one substring of the longest possible length, then print any one of them.



Examples:̉̉̉



"aabbcc", k = 1

Max substring can be any one from {"aa" , "bb" , "cc"}.

Output: "aa"



"aabbcc", k = 2

Max substring can be any one from {"aabb" , "bbcc"}.

Output: "aabb"



"aabbcc", k = 3

There are substrings with exactly 3 unique characters

{"aabbcc" , "abbcc" , "aabbc" , "abbc" }



Output: "aabbcc"



"aaabbb", k = 3

There are only two unique characters, thus show the error message.

Output: "Not found"


