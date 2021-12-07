
// ES6
console.log('---------------- [653] Map -----------------');

var myMap = new Map([
    ['name', 'NolBu'],
    ['age', 30],
    ['address', 'Seoul']
]);
console.log(myMap, myMap.size);

// 추가
myMap.set('tel', '010-1234-5678');
console.log(myMap, myMap.size);

// 삭제
myMap.delete('tel', '010-1234-5678');
console.log(myMap, myMap.size);

// 가져오기
var name = myMap.get('name');
console.log(name);


var k = myMap.keys();
var v = myMap.values();
var e = myMap.entries();

console.log(k.next());
console.log(v.next());

for(var item of e) {
    console.log(item);
};
console.log('');


var product = ['TV', 'Phone', '가습기', '시계', '컴퓨터'];
var fruit = ['사과', '바나나', '딸기'];

var myArray = [product, fruit];
console.log(myArray[0]);
console.log('');


var sendData = new Map([
    ['prod', product],
    ['fruit', fruit]
]);
console.log(sendData)

var p = sendData.get('prod');
console.log(p)
