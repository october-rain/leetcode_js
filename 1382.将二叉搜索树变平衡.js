/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    let stack = []
    function inorder(root) {
        if (!root) return
        inorder(root.left)
        stack.push(root.val)
        inorder(root.right)
    }

    function buildAVL(low, high) {
        if (low > high) return null
        const mid = Math.floor((low + high) / 2)
        const node = new TreeNode(stack[mid])
        node.left = buildAVL(low, mid - 1)
        node.right = buildAVL(mid + 1, high)
        return node
    }
    inorder(root)
    return buildAVL(0, stack.length - 1) // ! 记得这里 len 要 -1
}
// @lc code=end
