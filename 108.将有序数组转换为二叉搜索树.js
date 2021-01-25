/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null
    return buildBST(0, nums.length - 1)
    function buildBST(low, high) {
        if (low > high) return null
        const mid = Math.floor((low + high) / 2)
        const cur = new TreeNode(nums[mid]) // ! 这里要使用nums，所以要把递归函数写在函数里
        cur.left = buildBST(low, mid - 1)
        cur.right = buildBST(mid + 1, high)
        return cur
    }
}

// @lc code=end
