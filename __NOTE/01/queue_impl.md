
## 현재 Queue의 상태

```typescript
class Queue {
  first: QNode = { 
    data: 1, 
    next: QNode { data: 2, next: [QNode] } 
  }
  last: QNode = { data: 4 },
}
```

- first의 data는 제일 처음에 넣은 1이 할당 되어있음
- next의 data는 두번째로 넣은 2가 할당되어있고 next에는 QNode 즉 data 3이 할당되어있음.
- 마지막에 넣은 4은 last의 data에 할당되어있음

```typescript
// q.enqueue(5)를 넣으면 아래와 같은 구조가 되는 것
class Queue {
  first: QNode = { 
    data: 1, 
    next: QNode { 
      data: 2, 
      next: { 
        data: 3, 
        next: { 
          data: 4, 
          next: { data: 5 } 
        } 
      } 
    } 
  }
  last: QNode = { data: 5 },
}
```

[뒤로](./../../README.md)
