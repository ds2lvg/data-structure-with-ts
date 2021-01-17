// 숙제

class LLNode<T> {
  public data: T;
  public next: LLNode<T>;

  constructor(data?: T) {
    this.data = data;
  }

  append(data: T): void{ // 할당받은 데이터를 노드에 넣어 추가
    // 마지막에 추가할 노드
    // 찾을 노드를 가리키는 현재 포인터
    
    while() { // 맨마지막 노드 전까지 반복
      // 마지막 반복에서 마지막 노드가 선택됨
    }
    
    // 마지막 노드의 next에 새로 생성한 노드를 할당
  }

  delete(data: T) { // 삭제할 데이터를 받아 노드를 삭제
    // 찾을 노드를 가리키는 현재 포인터
    
    while() {// 맨마지막 노드 전까지 반복
      if() { // 맨 마지막 데이터까지는 안가므로 next의 data가 일치한다면
        // 현재 노드의 next를 next.next로 변경 -> 현재 노드의 다음 포인터는 끊기고 그 다다음 포인터를 연결하는 것
      } else {
       // 다음 노드를 이동해서 찾기위해 포인터를 next로 변경
      }
    }
  }

  retrieve(): void { // 콘솔찍는 함수 구현 완료
    let n:LLNode<T> = this; // 찾을 노드를 가리키는 현재 포인터
    let str = '';
    while(n.next !== undefined) { // 맨마지막 노드 전까지 반복
      str += n.data + " → ";
      n=n.next; // 다음 노드를 이동해서 찾기위해 포인터를 next로 변경
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
header.delete(2);
header.delete(3);
header.retrieve(); // 1 → 2 → 3 → 4