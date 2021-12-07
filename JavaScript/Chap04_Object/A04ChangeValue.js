
console.log('---------------- [137] Primary Type And Reference Type-----------------');

var numA = 100;
var numB = numA;

// 비교
console.log(numA == numB, numA === numB);

numA = 200;
console.log(numA == numB, numA === numB);
console.log('');


var objA = {
    name: 'NolBu',
    age: 30,
};

// 값 복사가 아닌 주소값 복사가 되서 두개가 동일한 객체를 쳐다보게 된다
var objB = objA;
console.log(objA == objB, objA === objB);

objA.name = 'HungBu';
console.log(objA == objB, objA === objB);

// 동일한 객체가 있다고 그 값을 사용하지 않고 새로 작성하고 그 작성된 번지수를 돌려준다.
var objC = {
    name: 'HungBu',
    age: 30,
};
console.log(objA == objC, objA === objC);


