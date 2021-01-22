/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = new Map()
    let stack = []
    map.set("(", ")")
    map.set("[", "]")
    map.set("{", "}")
    if (!s) return true
    for (let i = 0; i < s.length; i++) {
        const t = s[i]
        if (map.has(t)) {
            stack.push(map.get(t))
        } else {
            if (t !== stack.pop()) return false
        }
    }
    return !stack.length // 这一步很重要，为了应对“(()” 左多于右这种情况
}
// @lc code=end
