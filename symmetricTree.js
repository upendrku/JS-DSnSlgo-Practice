/*
101. Symmetric Tree
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
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
var isSymmetric = function (root) {
    if (!root) return true
    return dfs(root.left, root.right)

    function dfs(leftNode, rightNode) {
        if (!leftNode && !rightNode) {
            return true
        }
        if (leftNode && !rightNode || !leftNode && rightNode || leftNode.val !== rightNode.val) {
            return false
        }
        return dfs(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right)
    }
};