// tsc function.ts && node function.js

function fn1(n):number {
  // console.log(this);
  return n+1;
}

const fn2 = n => n+1;
const fn3 = n => n+1;
const fn4 = (n => n+1)() + (n => n+1)();

// fn1(1);
// fn2(2);


const 갓희 = {
  name: "갓희",
  fn1: function() {
    console.log(this);
  },
  fn2: () => {
    console.log(this);
  }
}
갓희.fn1();
갓희.fn2();