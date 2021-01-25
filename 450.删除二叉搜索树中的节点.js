/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null
    if (root.val === key) {
        if (!root.left && !root.right) {
            root = null
        } else if (root.left) {
            const max = findMax(root.left)
            root.val = max.val // ! 注意这里的替换，直接把数值替换了就行，然后把后面的递归删掉
            root.left = deleteNode(root.left, max.val) // ! 递归删除前面赋值过的值
        } else {
            const min = findMin(root.right)
            root.val = min.val
            root.right = deleteNode(root.right, min.val)
        }
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key) // ! 这里也是返回修改后的整个树，所以结尾返回root，这里只做递归、复制
    } else {
        root.right = deleteNode(root.right, key)
    }
    return root
}
function findMax(root) {
    while (root.right) {
        root = root.right
    }
    return root
}
function findMin(root) {
    while (root.left) {
        root = root.left
    }
    return root
}
// @lc code=end
