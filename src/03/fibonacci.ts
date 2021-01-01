// 피보나치 수열 구하기
// tsc fibonacci.ts && node fibonacci.js
/**
 * 피보나치 방식 재귀, 동적, 반복
 * ex) 1 1 2 3 5 8 13 21 34 55 ...
 * f(n) = f(n - 1) + f(n - 2)
 * f(1) = f(2) = 1
 */
class Fibonacci<T> { 

    fibo( n: number): number {
    
        if ( n == 1 || n == 2 ) {
            return 1;
        } else {
            // 재귀 호출?
            let res = this.fibo(n-1) + this.fibo(n-2)
            return res;
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
const fibona = new Fibonacci<number>();
console.log(fibona.fibonacciAraay(20));