/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
//! 这道题很重要，特别是最后返回 dummy.next 还是 head 的区别的时候

var deleteDuplicates = function (head) {
    if (!head || !head.next) return head
    let dummy = new ListNode()
    dummy.next = head // dummy的next永远指向head
    let cur = dummy // 必须要有一个cur，从dummy开始遍历
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            let val = cur.next.val
            while (cur.next && val === cur.next.val) {
                cur.next = cur.next.next
                console.log("head", head)
                console.log("dummy.next", dummy.next)
                console.log("dummy", dummy)
                console.log("cur", cur)
            }
        } else {
            cur = cur.next
        }
        console.log("-------------")
        console.log("head", head)
        console.log("dummy.next", dummy.next)
    }
    return dummy.next // 这里必须返回dummy.next 不能是 head ，否则 [1,1,1,x,x,x]类型 不满足 ，因为如果第一次就直接进入循环，执行30行的话，dummy的next就不是指向head了，如果是第二次则没事（链表真的很神奇啊）
}
// @lc code=end
