
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

var objB = objA;
