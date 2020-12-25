```typescript
class SNode<T> {
  public data: T;
  public next: SNode<T>;
  constructor(data: T) {
    this.data=data;
  }
}

class Stack<T> {
  private top:SNode<T>;
  push(data:T): void {
    const t:SNode<T> = new SNode<T>(data);
    t.next = this.top;
    this.top = t;
  }
  pop(): T  {
    if ( this.top === undefined ) return;
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }
  peek(): T { // 맨 위의 데이터 확인
    if ( this.top === undefined ) return;
    return this.top.data;
  }
  isEmpty() { // 스택이 비었는지 확인
    return this.top === undefined;
  }
  size(): number { // 현재 스택의 길이를 반환
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

export default Stack;
```


## 데이터를 넣었을 때 Stack의 상태

```typescript
const s = new Stack<number>();
s.push(3);
s.push(4);

class Stack {
  top: SNode { 
    data: 4, 
    next: SNode { 
      data: 3, 
      next: [SNode] 
      } 
    }
  }
}
```