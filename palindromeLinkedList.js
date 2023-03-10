/*
234. Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {

//     // Get midddle of the list by using a fast and slow pointer

//     let slow = head
//     let fast = head

//     while (fast && fast.next) {
//         slow = slow.next
//         fast = fast.next.next
//     }

//     // Reverse the end of the list

//     let reversed = null
//     let next = null
//     let cur = slow

//     while (cur) {
//         next = cur.next;
//         cur.next = reversed;
//         reversed = cur;
//         cur = next;
//     }

//     // Then traverse both lists to compare values returning false if any of them aren't equal
//     console.log(head) // for example [1,2,2,1] // [1,2,2]
//     console.log(reversed) // [1,2]

//     while (reversed) {
//         if (reversed.val !== head.val) return false
//         reversed = reversed.next
//         head = head.next
//     }

//     return true
// };

var isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    let prev = null;
    let next = null;

    // Reversed the first half of list
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    if (fast !== null) {
        slow = slow.next;
    }

    console.log(slow) // [2, 1]
    console.log(prev) // [2, 1]

    // comapring two halves
    while (slow !== null) {
        if (slow.val !== prev.val) {
            return false;
        }

        slow = slow.next;
        prev = prev.next;
    }

    return true;
};