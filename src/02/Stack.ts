// tsc Stack.ts && node Stack.js
class SNode<T> {
  public data: T;
  public next: SNode<T>;
  constructor(data: T) {
    this.data=data;
  }
}
// [2]
// [1]
// [0]
class Stack<T> {
  private top:SNode<T>;
  push(data:T): void {
    const t:SNode<T> = new SNode<T>(data);
    t.next = this.top; // [1]
    this.top = t; // [2]
  }
  pop(): T  {
    if ( this.top === undefined ) return;
    const data = this.top.data;  // [2]
    this.top = this.top.next; // [1]
    return data;
  }
  peek(): T { // 맨앞에 데이터 확인
    if ( this.top === undefined ) return; // 상단 노드가 없으면 종료
    return this.top.data; // 상단 노드가 있으면 반환
  }
  isEmpty() { // 스택이 비었는지 확인
    return this.top === undefined; // 상단 노드가 없으면 true 반환
  }
  size(): number { // 현재 스택의 길이를 반환
  //   if(this.top.next) {
  //     console.log(this.top.next)
  //     if(this.top.next.next) {
  //       console.log(this.top.next.next)
  //       if(this.top.next.next.next) {
  //         console.log(this.top.next.next.next)
  //         if(this.top.next.next.next.next) {
  //           console.log(this.top.next.next.next.next)
  //           if(this.top.next.next.next.next.next) {
  //             console.log(this.top.next.next.next.next.next)
  //           }
  //         }
  //       }
  //     }
  //   }
    // if ( this.top === undefined ) return 0;

    let size=0;
    if(this.top?.next) {
      let next = this.top.next;
      while(next) {
        size++;
        next = next.next;
      }
    }
    
    return this.top ? size+1 : 0;
  }
}

const s = new Stack<number>();
// s.push(1);
// s.push(1);
// s.push(1);
console.log(s.size()); 
// console.log(s.pop()); // 4
// console.log(s.peek()); // 3
// console.log(s.isEmpty()); // false
// console.log(s.pop()); // 3

export default Stack;