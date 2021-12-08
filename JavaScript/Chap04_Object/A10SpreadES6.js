
console.log('--------------- [627] spread Object ---------------')
const obj = {
    name: 'NolBu',
    age: 30
};

var objA = obj;         // 주소 복사

var objB = Object.assign({}, obj);          // 새롭게 객체를 만듬.
console.log(obj === objA, obj === objB);

// ES6
var objC = {...obj}
console.log(objC);
console.log(obj === objC);

// 없는 프로퍼티는 추가. 있는 프로퍼티는 뒤에 오는 값으로 대체
var objD = {...obj, id: 10, name: 'BangJa'};
console.log(objD);

var objE = {id: 1, name: 'BangJa', ...obj};
console.log(objE);
console.log('');




console.log('--------------- spread Array ---------------')
const ary = [10, 11, 100];
console.log(...ary);

const aryOne = [20, 21, 200, ...ary];
console.log(aryOne)

function func(x, y, z) {
    console.log(x, y, z);
};

func(...ary);
