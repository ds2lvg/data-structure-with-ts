type OneDigitOdd = 1 | 2 | 3 | 4;

const enum E {
  a=1,
  b,
  c,
  d,
} 

function getEnum(data: OneDigitOdd): OneDigitOdd {
  let result;
  switch (data) {
    case E.a:
      result = E.a
      break;
    default:
      break;
    }
  return result;  
}

getEnum(4)