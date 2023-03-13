const A = 4;
const B = 5;
const C = 5;
const D = 6;

// a. a==c && a>=c
if (A == C && A >= C) {
  console.log("a is true");
} else {
  console.log("a is false");
}

// b. b<=d && c+1 > a
if (B <= D && C+1 > A) {
  console.log("b is true");
} else {
  console.log("b is false");
}

// c. d-1<b || b != a+1
if (D-1 < B || B != A+1) {
  console.log("c is true");
} else {
  console.log("c is false");
}

// d. (c-a) == (b-a)
if ((C-A) == (B-A)) {
  console.log("d is true");
} else {
  console.log("d is false");
}