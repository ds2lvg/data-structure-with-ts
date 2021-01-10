### Symbol
- 새로 추가된 자료형
- 생성자 함수가 있음에도 다른 객체들처럼 new로 생성 불가.
- 유일하고 불변한 값을 가지기때문에 유일한 객체의 키로 용이

```javascript
typeof Symbol() // "symbol"
new Symbol() // Error

const obj = {};
const keySymbol = Symbol("백가희");
obj[keySymbol] = 1;
obj["백가희"] = 2;
console.log(obj) // {'백가희': 2, [Symbol(백가희)]: 1 }
```

### iterable
- [Symbol.iterator]()를 구현
- next()를 구현
  - { value: 값, done: 완료여부 }를 반환

```javascript
const iter1 = arr3[Symbol.iterator]();
const iter2 = set1[Symbol.iterator]();
console.log(iter1, iter2);
// iterable은 next 메서드에 { value: 값, done: 완료여부 }를 반환
console.log(iter1.next()); // { value: "사회", done: false }
console.log(iter1.next()); // { value: "수학", done: false }
console.log(iter1.next()); // { value: "수학", done: false }
console.log(iter1.next()); // { value: "국어", done: true }
console.log(iter1.next()); // { value: "국어", done: true }
```

### 사용자정의 iterable 객체

```javascript
const iterator = {
  [Symbol.iterator]() {
    const data = ["사회", "수학", "국어"];
    let i = 0;
    return {
      next() {
        return i == data.length ? { done: true } : {value: data[i++], done: false}
      }
    }
  }
}
```

### iterable 프로토콜의 구현 장점
- for of문으로 순회가 가능
- 전개연산자 사용 가능

```javascript
for (const iter of iterator) {
  console.log(iter)
}

var obj1 = {1:1, 2:2, 3:3}
var obj2 = {
  ...obj1,
  4:4
};
var map1 = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])
var map2 = new Map([
  ...map1 
])
console.log(map2)
```
