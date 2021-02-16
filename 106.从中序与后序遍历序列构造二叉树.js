/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const len = inorder.length
    function build(inL, inR, postL, postR) {
        if (inL > inR) return null
        const root = new TreeNode(postorder[postR])
        const pos = inorder.indexOf(postorder[postR])
        const numLeft = pos - inL
        root.left = build(inL, pos - 1, postL, postL + numLeft - 1)
        root.right = build(pos + 1, inR, postL + numLeft, postR - 1)
        return root
    }
    return build(0, len - 1, 0, len - 1)
}
// @lc code=end
