/*
226. Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    const traverse = (node) => {
        if (!node) return

        let left = node.left
        let right = node.right

        node.left = right
        node.right = left

        traverse(node.left)
        traverse(node.right)
    }

    traverse(root)

    return root
};

// Best solution
var invertTree = function (root) {
    if (root == null) return null

    let left = invertTree(root.left)
    let right = invertTree(root.right)

    root.left = right
    root.right = left

    return root
};