import Stack from "../02/Stack";

function sort(s1: Stack<number>):void {

}

const s1:Stack<number> = new Stack<number>();
s1.push(3);
s1.push(5);
s1.push(7);
s1.push(1);
s1.push(9);
sort(s1);
console.log(s1.pop()); // 1
console.log(s1.pop()); // 3
console.log(s1.pop()); // 5
console.log(s1.pop()); // 7
console.log(s1.pop()); // 9