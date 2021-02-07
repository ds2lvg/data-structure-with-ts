// ts-node ./src/07/BinaryTree.ts

class TNode<T>{
  data: T;
  left: this;
  right: this;
}

class Tree<T> {
  root: TNode<T>;
  setRoot(node: TNode<T>): void {
    this.root = node;
  }
  getRoot(): TNode<T> {
    return this.root;
  }
  makeNode(left: TNode<T>, data: T, right: TNode<T>) {
    const node = new TNode<T>();
    node.data = data;
    node.left = left;
    node.right = right;
    return node;
  }
  inorder(node: TNode<T>) {
    // Left, Root, Right : 4 2 5 1 3
    if(node !== undefined) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node: TNode<T>) {
    // Root, Left, Right : 1 2 4 5 3
    if(node !== undefined) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node: TNode<T>) {
    // Left, Right, Root: 4 5 2 3 1
    if(node !== undefined) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
}

/*
    1
   ↙ ↘ 
  2   3
 ↙ ↘ 
4   5
*/

const t = new Tree<number>();
const n4 = t.makeNode(undefined, 4, undefined);
const n5 = t.makeNode(undefined, 5, undefined);
const n2 = t.makeNode(n4, 2, n5);
const n3 = t.makeNode(undefined, 3, undefined);
const n1 = t.makeNode(n2, 1, n3);
t.setRoot(n1);
console.log("---inorder---")
t.inorder(t.getRoot()); // 4 2 5 1 3
console.log("---preorder---")
t.preorder(t.getRoot());  // 1 2 4 5 3
console.log("---postorder---")
t.postorder(t.getRoot()); // 4 5 2 3 1
