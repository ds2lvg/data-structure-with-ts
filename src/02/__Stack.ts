/*
// tsc Stack.ts && node Stack.js
class SNode<T> {
  public data: T; // 현재 들어온 데이터
  public next: SNode<T>; // 다음 노드
  constructor(data: T) { // data를 할당하는 생성자
    this.data=data;
  }
}

class Stack<T> {
  private first:SNode<T>; // 첫번째 노드
  private last:SNode<T>; // 마지막 노드
  //  [1,2,3,4,]
  // 넣을 때는 마지막에 추가하고 빼는 것도 마지막 인덱스에서 push하면 마지막 노드 추가, pop하면 마지막 노드가 지워지고 마지막 노드 전의 노드가 마지막 노드가 된다.

  push(data:T): void { // 스택에 데이터 추가
    const t = new SNode<T>(data); // 받은 타입으로 노드 한개 생성
    if ( this.last != undefined ) { // 마지막에 노드가 있으면 
      this.last.next = t; // 마지막 노드 뒤에 생성한 노드 할당
    }
    this.last = t; // 마지막 노드 뒤에 노드를 할당
    if ( this.first === undefined ) { //스택에 데이터가 없으면
      this.first = t;  // 첫번째 노드에 마지막 노드와 같은 값을 할당
    }  
     
  }
  pop(): T { // 스택의 top에 있는 데이터를 삭제하고 다음 데이터 반환
     if ( this.first === undefined ) return; // 스택에 데이터가 없으면 그냥 종료
      const data = this.last.data// 스택에 마지막 노드 데이터를 백업해 놓는다. ( 마지막에 반환해야 한다.)

      this.last = undefined; // 마지막 노드를 지운다.
      this.last = this.last.next; // last 전의 노드를 .... last에 넣어 줘야 하는 것이 아닌가?? ㅠㅠ 
      // 힝 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
      // 마지막 노드 지우고 그 전의 노드를 마지막 노드로 ..... 
      //  노드 너무 어렵다 ㅠ      
     return data;
  }
  peek(): T { // 맨앞에 데이터 확인
    if ( this.first === undefined ) return; // 첫번째 노드가 없으면 종료
    return this.first.data; // 첫번째 노드가 있으면 반환
  }
  isEmpty() { // 스택이 비었는지 확인
    return this.first === undefined; // 첫번째 노드가 없으면 true 반환
  }
}

const s = new Stack<number>();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s); 
 console.log(s.pop()); // 4
// console.log(s.peek()); // 1
 console.log(s);
// console.log(s.isEmpty()); // false
// console.log(s.pop()); // 3

export default Stack;
*/