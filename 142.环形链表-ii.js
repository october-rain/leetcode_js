/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // * flag 法
    // while (head) {
    //     if (head.flag) {
    //         return head
    //     } else {
    //         head.flag = true
    //         head = head.next
    //     }
    // }
    // return null

    // * 双指针法
    if (!head || !head.next) return null
    let p1 = (p2 = head)
    while (p2 && p2.next) {
        p1 = p1.next
        p2 = p2.next.next
        if (p1 === p2) break
    }
    if (p1 !== p2) return null
    p2 = head
    while (p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
    }
    return p1
}
// @lc code=end
