
// ES6
console.log('---------------- [643] Set -----------------');

// 중복데이터를 갖지 않는 배열
var setArray = new Set([10, 20, 30, 40, 50, 30, 40, 60]);

// 크기 배열 => length, set => size
console.log(setArray.size);
console.log(setArray)

// 값 포함 여부
console.log(setArray.has(10));      // true
console.log(setArray.has(100));     // false

// 값을 가져오는 명령은 없음. has로 검색하고 없으면 그 값 그대로 사용하면 됨.

// 삭제
setArray.delete(60);
console.log(setArray, setArray.size);


var k = setArray.keys();
var v = setArray.values();
var e = setArray.entries();

console.log(k.next());          // 값 자체가 index 역할을 한다.

for(var item of e) {
    console.log(item);
}

// 모드 삭제
setArray.clear();
console.log(setArray, setArray.size);

