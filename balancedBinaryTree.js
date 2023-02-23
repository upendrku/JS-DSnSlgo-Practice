/* 
110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.
A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never 
differs by more than one.
 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root === null) return true

    let res = true

    let maxDepth = (node) => {
        if (!node) return 0

        let ldepth = maxDepth(node.left), rdepth = maxDepth(node.right)

        if (Math.abs(ldepth - rdepth) > 1) res = false

        return 1 + Math.max(ldepth, rdepth);
    }

    maxDepth(root)

    return res
}


