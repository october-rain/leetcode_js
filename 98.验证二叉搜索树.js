/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
    return dfs(root, -Infinity, Infinity)
}
// ! 要多写一个递归函数的原因是，不想改变原函数的参数（需要吧1个变成3个）
function dfs(root, min, max) {
    if (!root) return true
    // * 这一句判断的是当前结点和父节点的关系，并不是当前结点和子节点的关系
    if (root.val <= min || root.val >= max) return false
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
}
// @lc code=end
