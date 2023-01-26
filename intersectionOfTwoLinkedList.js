/* 
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.
For example, the following two linked lists begin to intersect at node c1:
The test cases are generated such that there are no cycles anywhere in the entire linked structure.
Note that the linked lists must retain their original structure after the function returns.

Example 1:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'

Example 2:
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'

Example 3:
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
*/

var getIntersectionNode = function(headA, headB) {
    let p = headA;
    let q = headB;
    
    while(p!=q && ( p.next || q.next)){
        if(p.next == null) p = headB;
        else   p=p.next;
        if(q.next == null) q= headA;
        else q=q.next; 
    }
    if(p==q) return p;
}

// cannot run this because we dont have such input
/* 
[4,1,8,4,5]                         [5,6,1,8,4,5]

*/

