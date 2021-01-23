/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//! 双端队列法 维护一个单调递减队列
var maxSlidingWindow = function (nums, k) {
    const len = nums.length
    const res = []
    const queue = []
    for (let i = 0; i < len; i++) {
        // * 判断队列尾部元素是否小于入队元素，如果小于，则不满足单调递减队列，需要pop
        while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop()
        }
        // * push 下标 而不是数值
        queue.push(i)
        // * 判断滑动窗口大小是否超过k，超过则要shift头部元素
        while (queue.length && i - queue[0] >= k) {
            queue.shift()
        }
        // * 判断是否已经可以向res中写入数据
        if (i + 1 >= k) {
            res.push(nums[queue[0]])
        }
    }
    return res
}
// @lc code=end
