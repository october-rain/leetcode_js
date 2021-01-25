/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) {
        root = new TreeNode(val)
        return root
    }
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val) // ! 这里不能直接return 因为这里不是返回搜索结果，而是要返回插入后的整个字数
    } else {
        root.right = insertIntoBST(root.right, val)
    }
    return root
}
// @lc code=end
