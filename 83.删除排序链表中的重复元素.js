/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head·
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let cur = head
    //! 这里循环的判断条件不能只写后半部分
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        }
        // 这里需要使用一个else，这样就处理重复2次以上的情况
        else {
            cur = cur.next
        }
    }
    return head
}
// @lc code=end
