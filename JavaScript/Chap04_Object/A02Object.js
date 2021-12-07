
console.log('---------------- [133] Object -----------------');

var obj = {
    name: 'NolBu', 
};

// 기존의 Object에 없는 키로 값을 할당하면 추가.
obj.age = 30;

// 존재하는 키에 값을 할당하면 변경
obj.name = 'HungBu';
console.log(obj);


// 삭제
delete obj.age;
console.log(obj);

// 메서드도 추가 가능
obj.display = function() {
    console.log(this.name)
}
console.log(obj);
obj.display();
console.log('');


var ary = [10, 11, 100];

var one = {
    name: 'One',
    age: 20,
    display: function() {
        console.log(`${this.name} / ${this.age}`);
    }
}

// for구문으로 순환.
for(var i = 0; i < ary.length; i++) {       // for(var i = 0; i < 3; i++) {     => i의 값이 0, 1, 2
    console.log(ary[i])
};

console.log(obj.length);                    // undefined

// Object 객체는 for로 순환 불가
// ES5 for ~ in 구문으로 가능

// 배열이나 객체를 사용하는 경우 주의. 다음 A05번 참조
for(var index in ary) {
    console.log(index, ary[index])
}

for(var index in one) {
    // console.log(typeof(index));          // 문자열로 호출된다.
    // one.'name', one.'age'..              // 문자열은 객체명['문자열'] 형태로 사용해야 한다.
    console.log(index, one[index])
}
