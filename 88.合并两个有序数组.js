/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let mIndicator = m - 1,
        nIndicator = n - 1,
        index = m + n - 1
    while (mIndicator >= 0 && nIndicator >= 0) {
        if (nums1[mIndicator] >= nums2[nIndicator]) {
            nums1[index] = nums1[mIndicator]
            index--
            mIndicator--
        } else {
            nums1[index] = nums2[nIndicator]
            index--
            nIndicator--
        }
    }
    while (nIndicator >= 0) {
        nums1[index] = nums2[nIndicator]
        nIndicator--
        index--
    }
}
// @lc code=end
