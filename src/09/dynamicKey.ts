interface NameHeightMap {
  [userName: string]: string | undefined;
}

const a = {
  name: "gahee",
  // key: "hello"
  b: { c: "a"} 
}

a.name = "jasmin";

const key = "name"

// a.key = "jasmin";
a[key] = "sumi";

console.log(a.b.c);
// optinal chaining
console.log(a.b["c"]);
console.log(a.b?.c);

const nameHeightMap: NameHeightMap= {

}

const h = nameHeightMap['가희']; // 이 시점에서 h의 타입은 number | undefined

// 9007199254740991

// Number.MAX_VALUE // 1.7976931348623157e+308
// Number.MAX_SAFE_INTEGER // 9007199254740991