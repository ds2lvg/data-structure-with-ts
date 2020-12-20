class QNode<T> {
  // 현재 들어온 데이터
  // 다음 노드
  // data를 할당하는 생성자
}

class Queue<T> {
  // 첫번째 노드
  // 마지막 노드
  private first:QNode<T>; 

  enqueue(item: T): void { // 맨끝에 데이터 추가
    // 받은 타입으로 노드 한개 생성

    // 마지막 노드가 있다면 
    // 그 노드 뒤에 생성한 노드를 할당
    // 마지막 노드는 생성한 노드로 할당
    // 큐에 데이터가 없다면
    // 첫번째 노드에 마지막 노드랑 같은 값을 할당
  }

  dequeue(): T { // 맨앞에 데이터 꺼냄
    // 큐에 데이터가 없다면 종료
      
    // 데이터에 첫번째 노드의 data를 백업
    // 첫번째 노드의 다음 노드를 첫번째 노드에 할당
    // 첫번째 노드가 비었을 때
    // 마지막 노드도 비운다.
    return // 첫번째 노드가 가리키고 있는 data 반환
  }

  peek(): T { // 맨앞에 데이터 확인
    // 첫번째 노드에 데이터가 없다면 종료

    return // 첫번째 노드가 가리키고 있는 data 반환
  }

  isEmpty(): boolean { // 큐가 비었나 확인
    return // 첫번째 노드가 있는지 여부 반환
  }
}

const q = new Queue<number>();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

export default Queue;