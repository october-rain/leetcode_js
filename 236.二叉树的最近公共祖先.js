/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    function dfs(root) {
        if (!root || root === p || root === q) return root
        const left = dfs(root.left)
        const right = dfs(root.right)
        if (left && right) return root
        return left || right
    }
    return dfs(root)
}
// @lc code=end
