// ts-node ./src/06/LLDeleteNode.ts

import LinkedListByOneWay, { LNode } from "./LinkedListByOneWay";

// 노드를 삭제할 수 있는 함수 deleteNode를 구현하시오
function deleteNode(n: LNode<number>): boolean {
  // 노드가 없거나 다음노드가 없으면 false
 if ( n == undefined || n.next == undefined ) {
   return false
 }
  // *2를 지우는 상황 , n = *2
  // 1 - 2 - 3 - 4 - 5 - 6
 n.data = n.next.data; // data: 2 -> 3
 n.next = n.next.next; // next: 3 -> 4
  return true;
}

const linkedList = new LinkedListByOneWay<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.retrieve(); // 1 → 2 → 3 → 4
deleteNode(linkedList.get(3));
linkedList.retrieve(); // 1 → 2 → 4