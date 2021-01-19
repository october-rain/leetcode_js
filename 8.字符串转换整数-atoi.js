/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const reg = /\s*([-\+]?[0-9]*).*/
    // * 匹配不到时：["w21", "", index: 0, input: "w21", groups: undefined]
    let group = s.match(reg)
    const max = Math.pow(2, 31) - 1
    const min = -max - 1
    let target = 0
    if (group) {
        target = +group[1]
        if (isNaN(target)) {
            target = 0
        }
    }
    if (target > max) {
        return max
    } else if (target < min) {
        return min
    }
    return target
}
// @lc code=end
