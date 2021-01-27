/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    // const res = []
    // if (!root) return res
    // const stack = [] //! stack 中存储的是没有被推入结果数组 res 的待遍历元素
    // let cur = root //! 这里的cur不可或缺
    // while (cur || stack.length) {
    //     while (cur) {
    //         stack.push(cur)
    //         cur = cur.left
    //     }
    //     cur = stack.pop()
    //     res.push(cur.val)
    //     cur = cur.right
    // }
    // return res

    // 下面这个写法也行
    const nums = []
    // 定义中序遍历二叉树，得到有序数组
    function inorder(root) {
        if (!root) {
            return
        }
        inorder(root.left)
        nums.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return nums
}
// @lc code=end
