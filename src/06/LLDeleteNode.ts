import LinkedListByOneWay, { LNode } from "./LinkedListByOneWay";

// 노드를 삭제할 수 있는 함수 deleteNode를 구현하시오
function deleteNode(n: LNode<number>): boolean {
  // 노드가 없거나 다음노드가 없으면 false
  // 노드가 있으면 노드의 데이터와 다음 노드 포인터를 옮기고 true
  return
}

const linkedList = new LinkedListByOneWay<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.retrieve(); // 1 → 2 → 3 → 4
deleteNode(linkedList.get(3));
linkedList.retrieve(); // 1 → 2 → 4