/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// ! 这道题需要 5 个指针，三个（pre，cur，next）用来反转，两个（left，right）用来确定反转子串的头和尾
var reverseBetween = function (head, m, n) {
    let pre, cur, left, right
    let dummy = new ListNode()
    // let len = n - m + 1
    dummy.next = head
    pre = dummy
    cur = head

    // 此处要向前挪动 m - 1次
    for (let i = 0; i < m - 1; i++) {
        pre = pre.next
        cur = cur.next
    }
    left = pre
    right = left.next

    // 这两步是必须的，因为只有cur会反转，而范围里的第一个元素不需要反转，所以要向后移一步
    pre = pre.next
    cur = cur.next

    // 此处 执行 n - m 次，要把 pre 移动到范围的最后一个（left的next要指向他）
    for (let i = m; i < n; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    left.next = pre
    right.next = cur
    return dummy.next
}
// @lc code=end
