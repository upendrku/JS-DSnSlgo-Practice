/*
19. Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let resultArr = []
    while (head) {
        resultArr.push(head.val)
        head = head.next
    }
    let newList = new ListNode()
    let p = newList
    for (let i = 0; i < resultArr.length; i++) {
        if (i === resultArr.length - n) continue
        p.next = new ListNode(resultArr[i])
        p = p.next
    }
    return newList.next
};

console.log(removeNthFromEnd({val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null }}}}}, 2))