
console.log('---------------- [628] Object Clone, Spread Operator -----------------');

var objA = {
    name: 'NolBu',
    age: 30, 
};

var objB = {
    address: 'Seoul',
    age: 100
}

// shallow Clone
var one = Object.assign({}, objA);
console.log(one);

var two = Object.assign({id: 1}, objA);
console.log(two);

var three = Object.assign(objA, objB);
console.log(three)
console.log(objA);          // 앞의 객체가 뒤의 객체와 결합된다.
console.log('');

// ES6 Spread Operator
var objA = {
    name: 'NolBu',
    age: 30, 
};

var objB = {
    address: 'Seoul',
    age: 100
}

const four = {...objA};
const five = {...objA, ...objB};
console.log(five);
console.log(objA)

var objC = {
    name: 'NolBu',
    age: 30,
    info: {
        tel: '010-1234-5678', 
        address: 'Seoul'
    },
    ary: [10, 11]
};

// shallow Clone
const six = {
    ...objC
}

objC.info.address = 'Busan';
console.log(six.info.address);      // Busan

// Deep Copy
const seven = {
    ...objC,
    info: {
        ...objC.info
    }
};

objC.info.address = 'InChen';
console.log(seven.info.address);      // Busan
