/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    //! 下面的方法是dfs中输入 0
    const len = nums.length
    const res = []
    const current = []
    const used = {}
    function dfs(nth) {
        if (nth === len) {
            res.push(current.slice())
            return
        }
        for (let i = 0; i < len; i++) {
            if (!used[nums[i]]) {
                used[nums[i]] = true
                current.push(nums[i])
                dfs(nth + 1) // ! 和 i 没关系
                current.pop()
                used[nums[i]] = false
            }
        }
    }
    dfs(0)
    return res

    //! 下面的方法是dfs中输入[]
    // const res = []
    // const used = []
    // function dfs(arr) {
    //     if (arr.length === nums.length) {
    //         // console.log(arr)
    //         // ! slice() 必不可少
    //         res.push(arr.slice())
    //         return
    //     }
    //     for (const num of nums) {
    //         // if(arr.includes(num)) continue  // ! 此处查找时间为O(n)不建议这样写
    //         if (used[num]) continue
    //         arr.push(num)
    //         used[num] = true
    //         dfs(arr)
    //         arr.pop()
    //         used[num] = false
    //     }
    // }
    // dfs([])
    // console.log(res)
    // return res
}
// @lc code=end
