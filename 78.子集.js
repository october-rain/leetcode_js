/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = []
    const subset = []
    const len = nums.length

    dfs(0)
    function dfs(n) {
        res.push(subset.slice())
        for (let i = n; i < len; i++) {
            subset.push(nums[i])
            dfs(i + 1)
            subset.pop()
        }
    }
    return res
}
// @lc code=end
