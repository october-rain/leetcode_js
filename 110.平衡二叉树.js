/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let flag = true

    function dfs(node) {
        if (!node || !flag) return 0

        const left = dfs(node.left)
        const right = dfs(node.right)

        if (Math.abs(left - right) > 1) {
            flag = false
        }

        return Math.max(left, right) + 1
    }

    dfs(root)

    return flag
}
// @lc code=end
