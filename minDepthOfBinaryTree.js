/*
111. Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */

// NOTE: We need to calculate min no. of nodes connecting the leaf with the top node
// For this we will use BFS
var minDepth = function (root) {
    if (root === null) return 0

    let minDepth = 1
    let queue = [root]

    while (queue.length) {
        let levelSize = queue.length

        while (levelSize) {
            let current = queue.shift()
            if (current.left === null && current.right === null) {
                return minDepth
            } else {
                if (current.left) queue.push(current.left)
                if (current.right) queue.push(current.right)
            }
            levelSize--
        }
        minDepth++
    }
    return minDepth
};

// Better solution
var minDepth = function (root) {
    if (root === null) {
        return 0
    }

    if ((root.left === null) && (root.right === null)) {
        return 1
    }

    let min_depth = Number.POSITIVE_INFINITY;
    if (root.left !== null) {
        min_depth = Math.min(minDepth(root.left), min_depth)
    }
    if (root.right !== null) {
        min_depth = Math.min(minDepth(root.right), min_depth)
    }

    return min_depth + 1
};

console.log(minDepth(new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6, null, null)))))))