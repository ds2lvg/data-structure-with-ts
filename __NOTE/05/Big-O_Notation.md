## 빅오(Big-O)표기법
- 설명

수식: 2 * n * n * n = 2n
O(n)
O(n2)

<br/>
---
<br/>

## O(I): constant time
- 설명

```typescript
function fn(n: number[]):boolean {
  return (n[0] == 0) ? true : false;
}
```

<br/>
---
<br/>

## O(n): Linear time
- 설명

```typescript
function fn(n: number[]):number {
  for (let i = 0; i < n.length; i++) {
      console.log(n[i]);
  }
}
```

<br/>
---
<br/>

## O(n²): quadratic time
- 설명


```typescript
function fn(n: number[]):number {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
        console.log(i+j);
    }
  }
}
```

<br/>
---
<br/>

## O(nm): quadratic time
-  설명

```typescript
function fn(n: number[]):number {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < m.length; j++) {
        console.log(i+j);
    }
  }
}
```

<br/>
---
<br/>

## O(n³): polynomial / cubic time
- 설명

```typescript
function fn(n: number[]):number {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      for (let k = 0; k < n.length; k++) {
          console.log(i+j+k);
      }
    }
  }
}
```

<br/>
---
<br/>

## O(2ⁿ): exponenial time
- 설명

```typescript
function fn(n: number, r: number):number {
  if(n <= 0) return 0;
  else if(n === 1) return r[n] = 1;
  return r[n] = fn(n - 1, r) + fn(n - 2, r);
}
```

<br/>
---
<br/>

## O(mⁿ): exponenial time
- 설명

```typescript
// 예제코드
```

<br/>
---
<br/>

## O(log n): binary search
- 설명 

```typescript
/**
 * @param {number} s 첫번째 인덱스
 * @param {number} e 마지막 인덱스, 초기는 arr.length고 그다음은 중간값 전 인덱스
 */
function fn(k: number, arr: number[], s: number, e: number):number {
  if(s > e) return -1;
  m = (s + e) / 2; // 중간값을 찾음
  if(arr[m] === k) return m; // 찾는값이 키값과 일치하는 경우
  else if(arr[m] > k) return fn(k, arr, s, m-1); // 찾는값이 중간값 보다 작으면, 중간지점 바로 전까지로 해서 재귀호출
  else return fn(k, arr, m+1 ,e); // 찾는값이 중간값 보다 큰 경우 중간값 다음 지점부터 끝으로 해서 재귀호출
}
```

<br/>
---
<br/>

## O(sqrt(n))
- 설명

```typescript
function sqrt(n: number) {
  for(let i=1; i*i<n; i++) {
    if(i * i === n) return i;
  }
  return -1;
}

sqrt(16); // loop 4
```

[뒤로](../README.md)