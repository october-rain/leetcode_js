/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    function isPalindrome(i, j) {
        while (i < j) {
            if (s[i] !== s[j]) return false
            i++
            j--
        }
        return true
    }
    let l = 0
    let r = s.length - 1
    while (l < r && s[l] === s[r]) {
        l++
        r--
    }
    if (s[l] !== s[r]) {
        // console.log(isPalindrome(l + 1, r))
        return isPalindrome(l + 1, r) || isPalindrome(l, r - 1)
    }
    return true
}
// @lc code=end
