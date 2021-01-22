/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    const len = T.length
    const arr = new Array(len).fill(0)
    const stack = []
    for (let i = 0; i < len; i++) {
        // ! 下面的判断代码需要写在循环之下，不然会漏
        // if (!stack.length || T[stack.length - 1] > T[i]) {
        //     stack.push(i)
        // }
        while (stack.length && T[stack[stack.length - 1]] < T[i]) {
            let index = stack.pop()
            let day = i - index
            arr[index] = day
        }
        // ! 循环结束之后，条件必然是 !stack.length || T[stack.length - 1] > T[i] 为 true 所以不需要判断
        stack.push(i)
    }
    return arr
}
// @lc code=end
