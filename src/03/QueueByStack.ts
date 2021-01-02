// ts-node ./src/03/QueueByStack.ts
// tsc ./src/03/QueueByStack.ts && node ./src/03/QueueByStack.js

import Stack from '../02/Stack';

class QueueByStack<T> {
  stackNewest: Stack<T>; // 새로운(new) 데이터를 쌓는 스택
  stackOldest: Stack<T>; // 오래된(old) 데이터를 꺼내기 위한 스택
  constructor() {
    this.stackNewest = new Stack<T>(); //  [1,2,3,4,5]
    this.stackOldest = new Stack<T>(); //  [5,4,3,2,1]
  }
  size(): number{ // 두개 Stack의 사이즈를 합쳐서 반환
    return this.stackNewest.size() + this.stackOldest.size();
  }
  add(value: T): void { // enqueue: 새로운 데이터를 쌓아야됨
    this.stackNewest.push(value);
  }
  shiftStacks(): void { // stackNewest를 stackOldest 옮기면서 순서를 뒤집는 역할
    if(this.stackOldest.isEmpty()) { // 오래된 데이터가 비었을 때만 실행
      console.log("his.stackOldest", this.stackOldest)
      while (!this.stackNewest.isEmpty()) { // 새로운 데이터를 다 비울때까지
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }
  remove(): T { // dequeue: shift로 순서를 바꾸고 꺼냄
    this.shiftStacks();
    return this.stackOldest.pop();
  }
  peek() { // 데이터 확인
    this.shiftStacks();
    return this.stackOldest.peek();
  }

}

const q:QueueByStack<number | string> = new QueueByStack<number>();
q.add(1);
q.add("2");
q.add(3);
q.add("4");
q.remove(); // 1
q.remove(); // "2"
q.remove(); // 3
q.add(5);
q.add(6);
console.log("q", q); // "4"
console.log(q.peek()); // "4"