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
// console.log(fibona.fibonacciAraay(20));



const arr:Array<number | string> = [1, "1", 3];
const arr2:[string, string, string] = ["aaa", "백가희", "바보"];
arr.push("false");
arr2.push("aa");

type User = {
    name: string; 
    readonly height?: number;
}

interface User2 {
    name: string; 
    readonly height?: number;
}

const user:User = { name: '안희종', height: 176 }

user.name = "갓희"

//  console.log(fibo(77, []));

// ts-node ./src/03/fibonacci.ts

type onlyNumber = (a: number, b: number) => number;
const sum: onlyNumber = (a, b) => (a + b);
const divide: onlyNumber = (a, b) => (a - b);
sum(1,2)
divide(1,2)

type obj = {name:string, addr:string, age?: number,  height?: number}


function getInfo({name,age,addr,height}:obj) {
    //
    if(typeof name !== "string") {
        throw new Error("이름을 써 새꺄")
    }
}
getInfo({name:"손영철", addr: '서울', age: 31, height:175});
getInfo({addr: '서울', age: 31, name:"김종민", height:175});
