/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const len = preorder.length
    function build(preL, preR, inL, inR) {
        if (preL > preR) return null
        let root = new TreeNode(preorder[preL])
        let pos = inorder.indexOf(preorder[preL])
        let numLeft = pos - inL

        // ! 这两句要注意理解 preL + numLeft、1 + numLeft + preL 两部分需要添加 numLeft
        root.left = build(1 + preL, preL + numLeft, inL, pos - 1)
        root.right = build(1 + numLeft + preL, preR, pos + 1, inR)
        return root
    }
    return build(0, len - 1, 0, len - 1)
}
// @lc code=end
