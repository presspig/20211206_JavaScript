
console.log('---------------- [219] Internal Slot, Method -----------------');

var obj = {
    // 데이터 프로퍼티
    firstName: 'Hong', 
    lastName: 'GilDone',
    age: 30,
    display: function() {
        console.log(`${this.firstName} / ${this.lastName}`)
    },

    // 접근자 프로퍼티 => 정의는 함수 형태로 하고 사용은 프로퍼티 형태로 한다.
    get fullName() {
        console.log(`${this.firstName} / ${this.lastName}`)
    },
    set fullName(fName) {
        this.firstName = fName;
    }

};
console.dir(obj);

// 부모에서 전달받은 값이나 명령은 뭐가 있을까 [[Prototype]]
console.log(obj.__proto__);                     // ES6에서 표준이 됨
console.log( Object.getPrototypeOf(obj) );      // 표준
console.log('');

obj.display();

// 접근자 프로퍼티를 이용한 데이터 참조 및 설정
// 기존의 firstName은 숨기고 다른 이름으로 참조하고자 할 경우. set이 없으면 사용자는 참조만 가능한 변수가 된다.
obj.fullName;
obj.fullName = 'ABC';
obj.fullName;

// 프로퍼티의 세부 사항을 조회
console.log( Object.getOwnPropertyDescriptor(obj, 'firstName') );


