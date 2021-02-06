/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const len = nums.length
    if (!len) return 0

    const arr = new Array(len).fill(1)
    let maxLen = 1

    for (let i = 1; i < len; i++) {
        //! 回头遍历之前的那些序列
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                // ! 判断是当前的长度长，还是满足条件的前面序列+1的长度长
                arr[i] = Math.max(arr[i], arr[j] + 1)
            }
        }
        if (arr[i] > maxLen) maxLen = arr[i]
    }
    return maxLen
}
// @lc code=end
