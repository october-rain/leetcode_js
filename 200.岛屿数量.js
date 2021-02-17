/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const moveX = [0, 1, 0, -1]
    const moveY = [1, 0, -1, 0]
    const row = grid.length
    const column = grid[0].length
    if (!grid || row === 0 || column === 0) return 0
    let count = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === "1") {
                dfs(grid, i, j)
                count++
            }
        }
    }
    return count
    function dfs(grid, x, y) {
        // ! 边界条件有俩是 >=
        if (x < 0 || x >= row || y < 0 || y >= column || grid[x][y] === "0")
            return
        grid[x][y] = "0"
        for (let i = 0; i < 4; i++) {
            dfs(grid, x + moveX[i], y + moveY[i])
        }
    }
}
// @lc code=end
