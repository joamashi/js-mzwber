/*
  모든 개발자가 알아야 하는 7가지 ES6 스프레드 연산자 트릭

  ES6는 점 세 개(...)로 이루어진 스프레드 연산자를 제공합니다.
  스프레드 연산자는 map, set, object와 같이 반복 가능한 객체를 펼치게끔 해줍니다. 
  이 기능은 더 적게 쓰고 더 많은 것을 할 수 있게 해줍니다.
*/

const arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(...arr); // 1 2 3 4 5
const { name, ...other } = { name: 'fatfish', age: 100, luckyNumber: 6 };
console.log(name); // fatfish
console.log(other); // { age: 100, luckyNumber: 6 }

/*
  1. 배열의 push() 메소드를 사용하는 더 나은 방법
  모두 push() 메소드가 복수의 불확실한 파라미터를 받을 수 있다는 것을 알고 있을 것입니다.
  보통 apply() 메소드를 이용해 배열을 채우지만, 그리 편한 방법은 아닙니다.
*/
const arr1 = ['fatfish', 'medium'];
arr1.push.apply(arr1, ['JavaScript', 'NodeJs']);
console.log(arr1); // ['fatfish', 'medium', 'JavaScript', 'NodeJs']

const arr2 = ['fatfish', 'medium'];
arr2.push(...['JavaScript', 'NodeJs']);
console.log(arr2); // ['fatfish', 'medium', 'JavaScript', 'NodeJs']

/*
  2. 배열 복사하기
  배열을 복사하는 건 스프레드 연산자의 가장 편리한 기능 중 하나입니다.
*/
const arr3 = ['fatfish', 'medium', 'JavaScript', 'NodeJs'];
const copyArr1 = arr3.slice(0); // [ 'fatfish', 'medium', 'JavaScript', 'NodeJs' ]
// 더 간단한 방법
const copyArr2 = [...arr3]; // [ 'fatfish', 'medium', 'JavaScript', 'NodeJs' ]

// 스프레드 연산자는 각 요소가 아니라 배열 자체를 새로운 배열로 복사합니다.
// 이는 복사가 깊지 않고, 얕음을 의미합니다.

const arr4 = ['fatfish', 'medium', ['JavaScript', 'NodeJs']];
const copyArr = [...arr4];
// 만약 세번째 요소를 변경하면, "arr" 또한 변경됩니다.
copyArr[2][0] = 'FrontEnd';
console.log(copyArr); // [ 'fatfish', 'medium', [ 'FrontEnd', 'NodeJs' ] ]
// arr도 변경됐습니다.
console.log(arr4); // [ 'fatfish', 'medium', [ 'FrontEnd', 'NodeJs' ] ]

/*
  3. 배열에서 중복값 제거하기
  배열의 중복값들을 set 데이터 구조와 스프레드 연산자를 통해 제거할 수 있습니다.
*/
const arr5 = ['fatfish', 'fatfish', 'medium', 'medium'];
const uniqueArray = [...new Set(arr5)];
console.log(uniqueArray); // ['fatfish', 'medium']

/*
  4. 복수 배열 연결하기
  그렇습니다. 스프레드 연산자를 통해 여러 배열을 이어 붙여 새로운 데이터를 만들 수 있습니다.
*/
const arr6 = ['fatfish', 'medium'];
const arr7 = ['JavaScript', 'NodeJs'];
const arr8 = [...arr6, ...arr7];
console.log(arr8); // ['fatfish', 'medium', 'JavaScript', 'NodeJs']

/*
  5. NodeList를 진짜 배열로 변환하기
  DOM 조작은 프런트엔드 개발자가 매일 하는 일입니다. 
  document.querySelectAll을 이용해 NodeList를 취득하는 것처럼요. 
  스프레드 연산자를 이용해 NodeList를 일반 배열로 변환할 수 있습니다. 
  그러면 forEach, map 등등을 이용할 수 있게 됩니다.
*/
// $divs는 NodeList입니다
const $divs = document.querySelectorAll('div');
// $arrayDivs는 Array입니다
const $arrayDivs = [...$divs];
console.log(Array.isArray($divs), Array.isArray($arrayDivs)); // false true

/*
  6. 구조 분해 할당
  스프레드 연산자는 종종 배열과 객체의 구조 분해 할당에 사용됩니다.
*/
// 배열의 구조 분해 할당
const [num0, ...others] = [1, 2, 3, 4, 5, 6];
console.log(num0); // 1
console.log(others); // [2, 3, 4, 5, 6]

// 객체의 구조 분해 할당
const obj = { name2: 'fatfish', age: 100, luckyNumber: 6 };
const { name2, ...other2 } = obj;
console.log(name2); // fatfish
console.log(other2); // { age: 100, luckyNumber: 6 }

/*
  7. 문자열을 배열로 변환하기
  이렇게 문자열이 배열로 바뀐다는 게 놀랍지 않나요?
*/
const name4 = 'fatfish';
const nameArray = [...name4]; // ['f', 'a', 't', 'f', 'i', 's', 'h']
