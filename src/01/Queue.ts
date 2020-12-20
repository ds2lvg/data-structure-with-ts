class QNode<T> {
  public data: T; // 현재 들어온 데이터
  public next: QNode<T> // 다음 노드
  constructor(data: T) { // data를 할당하는 생성자
    this.data=data;
  }
}

class Queue<T> {
  private first:QNode<T>; // 첫번째 노드
  private last:QNode<T>;  // 마지막 노드

  enqueue(data: T): void { // 맨끝에 데이터 추가
    const t = new QNode<T>(data); // 받은 타입으로 노드 한개 생성
    if(this.last !== undefined) { // 마지막 노드가 있다면
      this.last.next = t; // 그 노드 뒤에 생성한 노드를 할당
    }
    this.last= t; // 마지막 노드는 생성한 노드로 할당
    if(this.first === undefined) { // 큐에 데이터가 없다면
      this.first = t; // 첫번째 노드에 마지막 노드랑 같은 값을 할당
    }
  }
  dequeue(): T { // 맨앞에 데이터 꺼냄
    if(this.first === undefined) return; // 큐에 데이터가 없다면 종료
      
    const data = this.first.data; // 데이터에 첫번째 노드의 data를 백업
    this.first = this.first.next // 첫번째 노드의 다음 노드를 첫번째 노드에 할당
    
    if(this.first === undefined) { // 첫번째 노드가 비었을 때
      this.last = undefined;  // 마지막 노드도 비운다.
    }
    return data; // 첫번째 노드가 가리키고 있는 data 반환
  }

  peek(): T { // 맨앞에 데이터 확인
    if(this.first === undefined) return; // 첫번째 노드에 데이터가 없다면 종료

    return this.first.data; // 첫번째 노드가 가리키고 있는 data 반환
  }

  isEmpty(): boolean { // 큐가 비었나 확인
    return this.first === undefined; // 첫번째 노드가 있는지 여부 반환
  }
}

const q = new Queue<number>();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(q.dequeue()); // 1
console.log(q.peek()); // 2
console.log(q.dequeue()); // 2
console.log(q.isEmpty()); // false
console.log(q.dequeue()); // 3
console.log(q.dequeue()); // 4
console.log(q.isEmpty); // true

export default Queue;