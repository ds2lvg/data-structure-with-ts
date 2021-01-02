// 피보나치 수열 구하기
// tsc fibonacci.ts && node fibonacci.js
/**
 * 피보나치 방식 재귀, 동적, 반복
 * ex) 1 1 2 3 5 8 13 21 34 55 ...
 * f(n) = f(n - 1) + f(n - 2)
 * f(1) = f(2) = 1
 */

function factorial(n: number): number {
    return n === 1 ? 1 : n * factorial(n-1);
}
console.log(factorial(3));

// 클래스로 재귀 최적화
class Fib<T> { 
    arr: Array<number> = []; // number[]
    fibo( n: number): number {
        if ( n == 1) {
            return this.arr[1] = 1;
        } else if (n == 2 ) {
            return this.arr[2] = 1;
        } else if(this.arr[n] > 0) {
            return this.arr[n];
        } else {
            return this.arr[n] = this.fibo(n-1) + this.fibo(n-2);
        }
     }

     fibonacciAraay(n: number):string {
        let res='';

         for (let i = 1; i <= n; i++) {
            res += String(this.fibo(i))+' ';
         }
         return res;
     }

}
const fib = new Fib<number>();
// console.log(fib.fibo(77)); // 5527939700884757

// 함수로 재귀 최적화
function fibo( n: number, arr: number[]): number {
    if ( n == 1) {
        return arr[1] = 1;
    } else if (n == 2 ) {
        return arr[2] = 1;
    } else if(arr[n] > 0) {
        return arr[n];
    } else {
        return arr[n] = fibo(n-1, arr) + fibo(n-2, arr);
    }
 }
