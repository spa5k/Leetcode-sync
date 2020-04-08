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
const middleNode = (head, a=head,b=head) => {
    while(a && a.next) [b,a]=[b.next,a.next.next];
    return b;
};