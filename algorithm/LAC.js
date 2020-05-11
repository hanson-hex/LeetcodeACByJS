/*
LAC
有一个普通二叉树，AB分别为两个子节点，求AB最近（深度最大）的公共父节点。
*/
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class Solution {
  lowestCommonAncestor(root, A, B) {
    if (!root || root === A || root === B) {
      return root // 若root为空或root为A或root为B,说明找到了A,B其中一个
    }
    const left = this.lowestCommonAncestor(root.left, A, B)
    const right = this.lowestCommonAncestor(root.right, A, B)
    if (left && right) {
      return root // 若左子树找到A,右子树找到B,说明root为公共父节点
    }
    if (!left) {
      return right // 若左子树是null, 右子树不是，说明右子树找到了A或B
    }
    if (!right) {
      return left // 同理
    }
    return null
  }
}
/*
  4
 / \
3   7
   / \
  5   6
*/
a = new TreeNode(4)
b = new TreeNode(3)
c = new TreeNode(7)
d = new TreeNode(5)
e = new TreeNode(6)

a.left = b
a.right = c
c.left = d
c.right = e
s = new Solution()
node = s.lowestCommonAncestor(a, b, d)
console.log('nodeCommonAncestor:', node.val)
