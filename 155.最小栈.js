/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = []
    // 定义辅助栈
    this.stack2 = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    // 若入栈的值小于当前最小值，则推入辅助栈栈顶
    if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
        this.stack2.push(x)
    }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
    if (this.stack.pop() == this.stack2[this.stack2.length - 1]) {
        this.stack2.pop()
    }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    // 辅助栈的栈顶，存的就是目标中的最小值
    return this.stack2[this.stack2.length - 1]
}

// ! 此种方法有溢出问题
// var MinStack = function () {
//     this.stack = []
//     this.minV = Number.MAX_VALUE
// }

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function (x) {
//     // update 'min'
//     const minV = this.minV
//     if (x < this.minV) {
//         this.minV = x
//     }
//     return this.stack.push(x - minV)
// }

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//     const item = this.stack.pop()
//     const minV = this.minV

//     if (item < 0) {
//         this.minV = minV - item
//         return minV
//     }
//     return item + minV
// }

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//     const item = this.stack[this.stack.length - 1]
//     const minV = this.minV

//     if (item < 0) {
//         return minV
//     }
//     return item + minV
// }

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//     return this.minV
// }

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
