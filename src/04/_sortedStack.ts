// tsc sortedStack.ts && node sortedStack.js
// 스택의 정렬 인터넷 참고 했습니다. 
import Stack from "../02/Stack";

function sort(s1: Stack<number>):void {

    const newStack:Stack<number> = new Stack<number>();
    // s1이 비었는지 체크 false면 실행
    while (!s1.isEmpty()) {
        // s1 top의 값을 temp에 담는다.
        let temp = s1.pop();
        let count = 0;

        // newStack이 false고 newStack의 pop값이 s1의 top보다 크면 
        while (!newStack.isEmpty() && newStack.peek() > temp) {
            // s1에 newStack의 top 값을 넣는다.
            s1.push(newStack.pop());
            count++;            
        }

        newStack.push(temp);

        for (let i = 0; i < count; i++) {
            newStack.push(s1.pop());
        }
        console.log(newStack)
    }
    /**
     * newStack
     * 9
     * 7
     * 5
     * 3
     * 1
     */
    while (!newStack.isEmpty()) {
        s1.push(newStack.pop());
    }
    /**
     * s1
     * 1
     * 3
     * 5
     * 7
     * 9
     */
}

const s1:Stack<number> = new Stack<number>();
s1.push(5);
s1.push(1);
s1.push(10);
s1.push(9);
s1.push(2);
// s1.push(3);
// s1.push(5);
// s1.push(7);
// s1.push(1);
// s1.push(9);
sort(s1);
console.log(s1.pop()); // 1
console.log(s1.pop()); // 3
console.log(s1.pop()); // 5
console.log(s1.pop()); // 7
console.log(s1.pop()); // 9