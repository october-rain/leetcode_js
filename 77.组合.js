/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = []
    const subset = []

    function dfs(index) {
        if (subset.length === k) {
            res.push(subset.slice())
            return
        }
        for (let i = index; i <= n; i++) {
            subset.push(i)
            dfs(i + 1) // ! 这里是 i + 1 ，不是 index + 1
            subset.pop()
        }
    }
    dfs(1)
    return res
}
// @lc code=end
