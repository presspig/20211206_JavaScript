
console.log('---------------- [226] defineProperty -----------------');

function printArray(data) {
    for(var i = 0; i < data.length; i++) {
        console.log(i, data[i]);
    }
};

function printObject(data) {
    for (const prop in data) {
        console.log(prop, data[prop]);
    }
};


var ary = ['one', 'two', 'three'];

// 배열도 객체라 동적으로 속성을 추가할 수 있다.
ary.name = 'NolBu';
ary.age = 20;

console.log(ary)
printArray(ary);
console.log('');

// 동적으로 추가된 속성까지 출력된다.
printObject(ary);

console.log(Object.getOwnPropertyDescriptors(ary))

// 열거가 되지 않게 속성 추가
Object.defineProperty(ary, 'address', {
    value: 'Seoul',
    writable: false,            // 수정 여부
    enumerable: true,           // for in 열거 여부
    configurable: false         // 삭제 가능 여부
});
console.log(ary)

ary.address = 'Busan';
console.log(ary)
delete ary.address;

printObject(ary);
console.log('');


console.log('---------------- object -----------------');

var obj = {
    name: 'NolBu',
    age: 30
};

Object.defineProperty(obj, 'address', {
    value: 'Seoul',
    writable: false,            // 수정 여부
    enumerable: false,           // for in 열거 여부
    configurable: false         // 삭제 가능 여부
});

// for문으로는 출력 안됨
// printArray(obj);

printObject(obj);
console.log('');


// 접근자도 정의 가능.
Object.defineProperty(obj, 'fullname', {
    get() {                         // value
        return this.name;
    },
    set(name) {                     // writable
        this.name = name;
    },
    enumerable: false,           // for in 열거 여부
    configurable: false         // 삭제 가능 여부
});
printObject(obj);
console.log('');

console.log(obj.fullname);
obj.fullname = 'ABC';
console.log(obj.fullname);
console.log('');


// 여러개를 한번에 정의 
var person = {};
Object.defineProperties(person, {
    name: {value: 'Person'},            // 기본값 fasle로 모두 세팅됨
    age: {value: 30, writable: false, enumerable: false, configurable: false},
    info: {
        get() {
            return this.name
        },
        set(name) {
            this.name = name
        },
        enumerable: false,
        configurable: false
    }
});

printObject(person);

console.log( Object.getOwnPropertyDescriptors(person) );
