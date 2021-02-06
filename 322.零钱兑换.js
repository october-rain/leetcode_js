/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let f = []
    f[0] = 0
    for (let i = 1; i <= amount; i++) {
        f[i] = Infinity
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j]) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1
    }
    return f[amount]
}
// @lc code=end
