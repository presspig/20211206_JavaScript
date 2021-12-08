
console.log('---------------- [636] Spread Operator -----------------');
/*
    ES6 비 구조화 할당(DeStructuring)
    배열, 객체, 반복 가능한 객체에서 값을 꺼내 그 값을 별도의 변수에 대입하는 구문.
*/

var ary = [10, 11, 100, 101, 1000, 1001];

// 변수 var x, y, z 이렇게 선언한 것과 동일하게 정의된다. (선언된 변수)
var [x, y, z] = ary;

[, , x, y, z] = ary;        // 앞의 두개 10, 11은 건너뛰고 100 부터 순차 대입
 
[x, y, z, ...args] = ary    // args는 대입하고 남은 모든 요소를 저정한다

console.log(x, y, z);
console.log(args);          // [101, 1000, 1001]

[x, [y, z]] = [10, [100, 200]];
console.log(x, y, z);
console.log('');

x = 10;
y = 20;

[y, x] = [x, y];            // 값 치환
console.log(x, y);


var objArray = [
    {id: 1, name: 'NolBu', age: 35}, 
    {id: 2, name: 'BangJa', age: 18}, 
    {id: 3, name: 'HungBu', age: 25}
];

var [x, y, z] = objArray
console.log(x.name, y.name, z.name)
console.log('');



var obj = {
    name: 'NolBu',
    age: 30,
    address: 'Seoul',
    getName: function(){
        return this.name
    }
}

// 변수를 꺼내는 obj의 key와 동일한 이름으로 선언해야 한다 
var {name, age, address, getName} = obj;
console.log(name, age, address, getName );
console.log(getName());

// Alias를 지원. 기본 값 지정도 가능
var {name: nickname='unknown', age: num, address: add, tel='010-0000-0000'} = obj;
console.log(nickname, num, add, tel);

