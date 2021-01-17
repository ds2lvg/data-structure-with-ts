// 숙제 아님

export class LNode<T> {
  public data: T;
  public next: LNode<T>;

  constructor(data?: T) {
    this.data = data;
  }

  // LLgetIntersection.ts에서 사용
  get(this:LNode<T>, idx: number): LNode<T> {

  }

  // LLgetIntersection.ts에서 사용
  addNext(data: T | LNode<T>): LNode<T> {

  }

  print() {

  }
}

export default class LinkedListByOneWay<T>{
  protected header: LNode<T>;
  constructor() {
    this.header = new LNode<T>();
  }

  append(data: T): void {

  }

  delete(data: T) {

  }

  retrieve(): void {

  }

  // LLCountByBack.ts에서 사용
  getFirst(): LNode<T> {

  }

  // LLDeleteNode.ts에서 사용
  get(idx: number): LNode<T> {

  }
}

// const linkedList = new LinkedListByOneWay<number>();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(4);
// linkedList.retrieve();
// linkedList.delete(1); // 첫번째 데이터 삭제 가능
// linkedList.retrieve();
