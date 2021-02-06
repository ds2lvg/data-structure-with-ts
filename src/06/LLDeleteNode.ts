import LinkedListByOneWay, { LNode } from "./LinkedListByOneWay";

// 노드를 삭제할 수 있는 함수 deleteNode를 구현하시오
function deleteNode(n: LNode<number>): boolean {
  // 노드가 없거나 다음노드가 없으면 false
 if ( n == undefined || n.next == undefined ) {
   return false
 } else {
  // 노드가 있으면 노드의 데이터와 다음 노드 포인터를 옮기고 true
  while(n.next !== undefined) {// 맨마지막 노드 전까지 반복
    if(n.next.data === n.data) { // 삭제할 데이터가 다음 노드의 데이터와 일치한다면
      n.next = n.next.next; // 현재 노드의 next를 next.next로 변경 -> 현재 노드의 다음 포인터는 끊기고 그 다다음 포인터를 연결하는 것
    } else {
      n = n.next; // 다음 노드를 이동해서 찾기위해 포인터를 next로 변경
    }
  }
  return true;
 }
  

}

const linkedList = new LinkedListByOneWay<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.retrieve(); // 1 → 2 → 3 → 4
deleteNode(linkedList.get(3));
linkedList.retrieve(); // 1 → 2 → 4