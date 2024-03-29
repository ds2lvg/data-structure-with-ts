// ts-node ./src/06/LLNode.ts

/**
 * 링크드 리스트
 * 일렬로 연결되는 데이터를 저장, 다음 데이터의 주소를 가지고 있다.
 * 삽입: 중간에 데이터를 삽입하고 싶으면 앞에 노드가 갖고있던 주소를 본인이 갖고 앞의 노드에게 순서를 알려준다.
 * 해당 노드가 갖고 있던 다음 노드 주소를 앞의 노드에게 주소를 준다.
 * 삭제: 삭제할 데이터가 다음 노드의 데이터와 일치한다면 다음다음 노드와 연결해서 끊는다.
 */

class LLNode<T> {
  public data: T;
  public next: LLNode<T>;
  constructor(data?: T) {
    this.data = data;
  }

  append(data: T): void{ // 할당받은 데이터를 노드에 넣어 추가
    const end = new LLNode<T>(data); // 마지막에 추가할 노드
    let n:LLNode<T> = this;// 찾을 노드를 가리키는 현재 포인터
    
    while(n.next !== undefined) { // 맨마지막 노드 전까지 반복
     n=n.next; // 마지막 반복에서 마지막 노드가 선택됨
    }
    
    n.next=end;// 마지막 노드의 next에 새로 생성한 노드를 할당
  }

  delete(data: T) { // 삭제할 데이터를 받아 노드를 삭제
    let n:LLNode<T> = this;// 찾을 노드를 가리키는 현재 포인터
    // 1(2) 2(3) 3(4) 4(u) 
    // data = 3
    // 1(2) 2(4) 4(u) 
    // data = 3

    while(n.next !== undefined) {// 맨마지막 노드 전까지 반복
      if(n.next.data === data) { // 삭제할 데이터가 다음 노드의 데이터와 일치한다면
        n.next = n.next.next; // 현재 노드의 next를 next.next로 변경 -> 현재 노드의 다음 포인터는 끊기고 그 다다음 포인터를 연결하는 것
      } else {
        n = n.next; // 다음 노드를 이동해서 찾기위해 포인터를 next로 변경
      }
    }
  }

  retrieve(): void { // 콘솔찍는 함수 구현 완료
    let n:LLNode<T> = this; // 찾을 노드를 가리키는 현재 포인터
    let str = '';
    while(n.next !== undefined) { // 맨마지막 노드 전까지 반복
      str += n.data + " → ";
      n = n.next; // 다음 노드를 이동해서 찾기위해 포인터를 next로 변경
    }
    // 마지막 노드 전에 끝났지만 n이 next를 가리키므로 data를 출력하면 끝까지 출력이 됨
    console.log(str + n.data);
  }
}

const header = new LLNode<number>(1);
header.append(2);
header.append(3);
header.append(4);
header.retrieve(); // 1 → 2 → 3 → 4
header.delete(2); // 2
header.delete(3); // 3
header.retrieve(); // 1 → 4
