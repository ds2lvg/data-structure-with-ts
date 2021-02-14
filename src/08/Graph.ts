// ts-node ./src/08/Graph.ts

import Queue from "../01/Queue";
import Stack from "../02/Stack";

class GNode {
  // adjacent: Array<GNode>; // 인접한 노드를 저장하는 리스트
  adjacent: GNode[] = []; // 인접한 노드를 저장하는 리스트
  marked: boolean; // 방문시 마킹
  constructor(public data: number) {
    this.marked = false;
    // this.adjacent = [];
  }
}

class Graph {
  nodes: Array<GNode>; // 노드를 저장하는 배열
  constructor(size: number) {
    this.nodes = new Array(size);
    for (let i = 0; i < size; i++) {
      this.nodes[i] = new GNode(i); // nodes 인덱스와 GNode의 data를 통일
    }
  }

  contains(arr: Array<GNode>, node: any): boolean {
    if(node.value !== undefined && Array.isArray(arr)) {
      return !(arr.findIndex(node.data) === -1)
    } else {
      return false;
    }
  }

  addEdge(i1: number, i2: number) { // 두 노드의 이어진 관계를 표현
    const n1 = this.nodes[i1];
    const n2 = this.nodes[i2];
    if(!this.contains(n1.adjacent, n2)) {
      n1.adjacent.push(n2)
    }
    if(!this.contains(n2.adjacent, n1)) {
      n2.adjacent.push(n1)
    }
  }

  dfs(index: number = undefined): void {
    if(index === undefined) return this.dfs(0);
    const root = this.nodes[index]; // 해당 인덱스로 노드를 가져와서 루트 지정
    const stack = new Stack<GNode>();
    stack.push(root);
    root.marked = true;
    while (!stack.isEmpty()) { // 스택에 데이터 다 꺼낼때까지 반복
      const r = stack.pop();
      for (const n of r.adjacent) {
        if(n.marked === false) {
          n.marked = true;
          stack.push(n);
        }
      }
      this.visit(r);
    }
  }

  dfsR(arg: number | GNode  = undefined): void { // 재귀호출로 dfs 구현
    if(arg === undefined) { // dfsR(): void
      return this.dfsR(0);
    } else if(typeof arg === "number"/*!isNaN(Number(arg))*/) { // dfsR(arg: number): void
      // 인덱스를 받으면 해당 노드를 찾고 재귀호출
      const index = arg as number;
      const r = this.nodes[index];
      this.dfsR(r);
    } else { // dfsR(arg: GNode): void
      // 재귀호출할 때는 매개변수 노드 포인터가 들어있음
      const r =  arg as GNode;
      if(r === undefined) return;
      r.marked = true;
      this.visit(r);
      for (const n of r.adjacent) {
        if(n.marked === false) {
          this.dfsR(n)
        }
      }
    }
  }

  bfs(index: number = undefined): void {
    if(index === undefined) return this.bfs(0);
    const root = this.nodes[index]; // 해당 인덱스로 노드를 가져와서 루트 지정
    const queue = new Queue<GNode>();
    queue.enqueue(root);
    root.marked = true;
    while (!queue.isEmpty()) { // 큐에 데이터 다 꺼낼때까지 반복
      const r = queue.dequeue();
      for (const n of r.adjacent) {
        if(n.marked === false) {
          n.marked = true;
          queue.enqueue(n);
        }
      }
      this.visit(r);
    }
  }

  visit(n: GNode): void {
    console.log(n.data);
  }
}

/*
   0
  /
1 -- 3    7
|  / | \ /
| /  |  5
2 -- 4   \
          6 - 8
*/

const g = new Graph(9);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(3, 4);
g.addEdge(3, 5);
g.addEdge(5, 6);
g.addEdge(5, 7);
g.addEdge(6, 8);

// g.dfs(); // 0 1 3 5 7 6 8 4 2
// g.dfs(3); // 3 5 7 6 8 4 2 1 0
// g.dfsR(3); // 3 1 0 2 4 5 6 8 7
// g.bfs();
g.bfs(3); // 3 1 2 4 5 0 6 7 8