/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // 初始化一个堆数组
    const heap = []
    // n表示堆数组里当前最后一个元素的索引
    let n = 0
    // 缓存 nums 的长度
    const len = nums.length

    function upHeap(low, high) {
        let i = high
        let j = Math.floor((i - 1) / 2)
        while (j >= low) {
            if (heap[j] > heap[i]) {
                const temp = heap[i]
                heap[i] = heap[j]
                heap[j] = temp
                i = j
                j = Math.floor((i - 1) / 2)
            } else {
                break
            }
        }
    }
    function downHeap(low, high) {
        let i = low,
            j = i * 2 + 1
        while (j <= high) {
            if (j + 1 <= high && heap[j + 1] < heap[j]) {
                j = j + 1
            }
            if (heap[i] > heap[j]) {
                const temp = heap[i]
                heap[i] = heap[j]
                heap[j] = temp
                i = j
                j = j * 2 + 1
            } else {
                break
            }
        }
    }
    function insert(x) {
        heap[n] = x
        upHeap(0, n) // ! 这里必须每次插入都执行，这样才能保证构建一个堆结构
        n++
    }
    function createHeap() {
        for (let i = 0; i < k; i++) {
            insert(nums[i])
        }
        // upHeap(0, k - 1) // ! 若只在这里调用一次毫无意义
    }
    function updateHeap() {
        for (let i = k; i < len; i++) {
            if (nums[i] > heap[0]) {
                heap[0] = nums[i]
                downHeap(0, k)
            }
        }
    }
    createHeap()
    updateHeap()

    return heap[0]
}
// @lc code=end
