/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let first = null
    let middle = head
    // let last = head.next
    let last

    // 此处判断 middle 因为 middle 才是反转对象
    while (middle !== null) {
        last = middle.next
        middle.next = first
        first = middle
        middle = last
        //* last = last.next 不能使用这句的原因是 当遍历到最后一个的时候null没有next
    }
    return first // 这里要返回first因为middle到空之后，循环才会结束
}
// @lc code=end
