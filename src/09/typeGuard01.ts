export type typeStrObj = { [k: string]: string };
export type typeNumStrObj = { [k: string]: number | string | [] };

const result:typeNumStrObj = {
  score: 100 
}
// result.score = "100"

// 위에 숫자를 대입했음에도 r은 숫자라는걸 추론못함
const r = result.score;
if(typeof r === "number") {
  r.toFixed();
} else if(Array.isArray(r)){
  // r.find()
} else {
  // r.split();
}