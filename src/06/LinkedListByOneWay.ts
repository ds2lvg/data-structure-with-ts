// ts-node ./src/06/LinkedListByOneWay.ts

export class LNode<T> {
  public data: T;
  public next: LNode<T>;

  constructor(data?: T) {
    this.data = data;
  }

  // LLgetIntersection.ts에서 사용
  // get(this:LNode<T>, idx: number): LNode<T> {
  //   return;
  // }

  // // LLgetIntersection.ts에서 사용
  // addNext(data: T | LNode<T>): LNode<T> {
  //   return;
  // }

  // print() {

  // }
}

export default class LinkedListByOneWay<T>{
  protected header: LNode<T>; // 리스트의 시작 노드

  constructor() {
    this.header = new LNode<T>(); // 헤더 노드 생성
  }

  append(data: T): void {
    const end = new LNode<T>(data);
    let n = this.header;
    while(n.next !== undefined) {
      n = n.next;
    }
    n.next=end;
  }

  delete(data: T) {
    let n = this.header;
    while(n.next !== undefined) {// 맨마지막 노드 전까지 반복
      if(n.next.data === data) { // 삭제할 데이터가 다음 노드의 데이터와 일치한다면
        n.next = n.next.next; // 현재 노드의 next를 next.next로 변경 -> 현재 노드의 다음 포인터는 끊기고 그 다다음 포인터를 연결하는 것
      } else {
        n = n.next; // 다음 노드를 이동해서 찾기위해 포인터를 next로 변경
      }
    }
  }

  retrieve(): void {
    let n = this.header.next; // 찾을 노드를 가리키는 현재 포인터
    let str = '';
    while(n.next !== undefined) { // 맨마지막 노드 전까지 반복
      str += n.data + " → ";
      n = n.next; // 다음 노드를 이동해서 찾기위해 포인터를 next로 변경
    }
    // 마지막 노드 전에 끝났지만 n이 next를 가리키므로 data를 출력하면 끝까지 출력이 됨
    console.log(str + n.data);
  }

  // LLCountByBack.ts에서 사용
  getFirst(): LNode<T> {
    return this.header;
  }

  // LLDeleteNode.ts에서 사용
  get(idx: number): LNode<T> {
    let n = this.header;
    let index = 0;
    while(n.next !== undefined) {
      n=n.next; // 다음 노드로 이동
      index++;  // 인덱스 증가
      if(index === idx) {
        return n;
      }
    }
    return n;
  }
}

const linkedList = new LinkedListByOneWay<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
// linkedList.retrieve();
linkedList.delete(1); // 첫번째 데이터 삭제 가능
// linkedList.retrieve();
