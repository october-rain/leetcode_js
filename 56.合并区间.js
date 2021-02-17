/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const len = intervals.length
    if (!intervals || !len) return []
    // ! 将所有区间按照第一个元素大小排序
    intervals.sort((a, b) => a[0] - b[0])
    const res = []
    res.push(intervals[0])
    for (let i = 1; i < len; i++) {
        let prev = res[res.length - 1]
        if (prev[1] >= intervals[i][0]) {
            prev[1] = Math.max(prev[1], intervals[i][1])
        } else {
            res.push(intervals[i])
        }
    }
    return res
}
// @lc code=end
