/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// ! 动态规划解法 https://leetcode-cn.com/problems/longest-palindromic-substring/solution/hui-wen-wen-ti-dong-tai-gui-hua-jspython5-zui-chan/
var longestPalindrome = function (s) {
    const len = s.length
    if (!len) return ""
    let res = s[0]
    const dp = []
    for (let i = len - 1; i >= 0; i--) {
        dp[i] = []
        for (let j = i; j < len; j++) {
            if (j === i) dp[i][j] = true
            else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true
            else if (s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] = true
            else dp[i][j] = false

            if (dp[i][j] && res.length - 1 < j - i) res = s.slice(i, j + 1)
        }
    }
    return res
}
// @lc code=end
