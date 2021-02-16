/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 遍历两次即可
var copyRandomList = function (head) {
    if (!head) return null
    let copy = new Node(head.val)
    let map = new Map()
    let pointer = head
    // ! copy的链表 也需要一个 指针
    let copyPointer = copy
    while (pointer) {
        copyPointer.next = pointer.next ? new Node(pointer.next.val) : null
        map.set(pointer, copyPointer)
        pointer = pointer.next
        copyPointer = copyPointer.next
    }
    // console.log(map)
    pointer = head
    copyPointer = copy

    while (pointer) {
        copyPointer.random = pointer.random ? map.get(pointer.random) : null
        pointer = pointer.next
        copyPointer = copyPointer.next
    }
    return copy
}
// @lc code=end
