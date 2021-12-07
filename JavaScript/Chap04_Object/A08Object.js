
console.log('---------------- [230] Object internal Method -----------------');

var one = { name: 'NolBu', age: 30 };

// 확장 가능(속성 추가) 여부. 삭제, 읽기, 쓰기 가능
console.log( Object.isExtensible(one) );        // true => 확장 가능

one.address = 'Seoul';
console.log(one);

// 확장 불가로 변경
Object.preventExtensions(one);

one.tel = '010-1234-5678';          // 추가 안됨
one.address = 'Seoul';              // 가능
delete one.age;                     // 가능
console.log(one);
console.log('');


// 객체 밀봉. 프로퍼티 추가, 삭제 금지. 읽기 쓰기 가능
var two = { name: 'NolBu', age: 30 };

console.log( Object.isSealed(two) );            // false => 막혀있지 않다
two.address = 'Seoul';
console.log(two);

// 추가 삭제 안되게 밀봉
Object.seal(two);

two.tel = '010-1234-5678';          // 추가 안됨
two.address = 'Seoul';              // 가능
delete two.age;                     // 삭제 안됨
console.log(two);
console.log('');



// 객체 동결. 읽기만 가능하다
var three = { name: 'NolBu', age: 30 };

console.log(Object.isFrozen(three));    // false => 동결 안되어 있음

// 동결
Object.freeze(three);
three.tel = '010-1234-5678';          // 추가 안됨
three.address = 'Seoul';              // 변경 안됨
delete three.age;                     // 삭제 안됨
console.log(three);
console.log(three.name);                // 읽기 가능.
console.log('');



// Deep Freeze
var four = { name: 'NolBu', age: 30, info: {tel: '010-1234-5678', address: 'Seoul'} };
Object.freeze(four);