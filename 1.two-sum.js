/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    let rest
    for (i = 0; i < nums.length; i++) {
        rest = target - nums[i]
        if (map.has(rest)) {
            return [map.get(rest), i]
        } else {
            map.set(nums[i], i)
        }
    }
}
// @lc code=end
