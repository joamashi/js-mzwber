/*
  구조 분해 할당
  Operators > Destructuring Assignment
*/

let a, b, rest;
[a, b] = [10, 20];
console.log(a, b); // 10, 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest); // 10 20 [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a, b); // 10 20

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a, b, rest); // 10 20 {c: 30, d: 40}

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y, z); // 1 2

var foo = ['one', 'two', 'three'];
var [red, yellow, green] = foo;
console.log(red, yellow, green); // "one" "two" "three"

var a2, b2;
[a2, b2] = [1, 2];
console.log(a2, b2); // 1 2

var a3, b3;
[a3 = 5, b3 = 7] = [1];
console.log(a3, b3); // 1, 7
console.log(); //

var a4 = 1;
var b4 = 3;
[a4, b4] = [b4, a4];
console.log(a4, b4); // 3 1

function f1() {
  return [1, 2];
}
var a5, b5;
[a5, b5] = f1();
console.log(a5, b5); // 1 2

function f2() {
  return [1, 2, 3];
}
var [a6, , b6] = f2();
console.log(a6, b6); // 1 3

var [a7, ...b7] = [1, 2, 3];
console.log(a7, b7); // 1 [2, 3]

var o = { p: 42, q: true };
var { p, q } = o;
console.log(p, q); // 42 true

var a8, b8;
({ a8, b8 } = { a8: 1, b8: 2 });
console.log(a8, b8); // 1 2

var o = { p: 42, q: true };
var { p: foo, q: bar } = o;
console.log(foo, bar); // 42 true

var { a9 = 10, b9 = 5 } = { a9: 3 };
console.log(a9, b9); // 3 5

var { a10: aa = 10, b10: bb = 5 } = { a10: 3 };
console.log(aa); // 3
console.log(bb); // 5

let { a11, b11, ...rest2 } = { a11: 10, b11: 20, c: 30, d: 40 };
console.log(a11); // 10
console.log(b11); // 20
console.log(rest2); // { c: 30, d: 40 }

const foo2 = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo2;
console.log(fizzBuzz); // true

// --------------------------------------------------------

// ES5
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // 이제 드디어 차트 그리기 수행
}
drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});

// --------------------------------------------------------

function drawES2015Chart({
  size = 'big',
  cords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, cords, radius);
  // 차트 그리기 수행
}
drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});

// --------------------------------------------------------

function userId({ id }) {
  return id;
}
function whois({ displayName: displayName, fullName: { firstName: name } }) {
  console.log(displayName + ' is ' + name);
}
var user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  },
};
console.log('userId: ' + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
