/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[\W|_]/g, "").toLowerCase()
    // console.log(s)
    let start = -1
    let end = s.length
    while (++start <= --end) {
        if (s[start] !== s[end]) return false
    }
    return true
}
// @lc code=end
