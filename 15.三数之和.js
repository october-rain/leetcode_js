/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    const len = nums.length
    for (let i = 0; i < len - 2; i++) {
        let lPointer = i + 1
        let rPointer = len - 1
        if (nums[i] === nums[i - 1]) continue
        while (lPointer < rPointer) {
            let sum = nums[i] + nums[lPointer] + nums[rPointer]
            // console.log(sum)
            if (sum === 0) {
                res.push([nums[i], nums[lPointer], nums[rPointer]])
                rPointer--
                lPointer++
                while (
                    lPointer < rPointer &&
                    nums[lPointer] === nums[lPointer - 1]
                ) {
                    lPointer++
                }
                while (
                    lPointer < rPointer &&
                    nums[rPointer] === nums[rPointer + 1]
                ) {
                    rPointer--
                }
            } else if (sum > 0) {
                rPointer--
                while (
                    lPointer < rPointer &&
                    nums[rPointer] === nums[rPointer + 1]
                ) {
                    rPointer--
                }
            } else if (sum < 0) {
                lPointer++
                while (
                    lPointer < rPointer &&
                    nums[lPointer] === nums[lPointer - 1]
                ) {
                    lPointer++
                }
            }
        }
    }
    return res
}
// @lc code=end
