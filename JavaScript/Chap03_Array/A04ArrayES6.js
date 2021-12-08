
// ES6

var ary = [10, 11, 100, 101, 1000, 1001];

// splice => 중간값 조작
var one = ary.fill('A', 1, 3);
console.log(ary);
console.log(one);

var two = new Array(10);
two.fill(0, 0);             // 0으로 0번째부터 끝까지를 채워라
console.log(two);


// indexOf 대신 사용 가능
console.log(one.includes(30));      // false => 없음

if( ! ary.includes(30) ) {
    ary.push(30);
}
console.log(ary);


// keys, values, entires
var k = ary.keys();
var v = ary.values();
var e = ary.entries();

console.log(k);
console.log(v);
console.log(e);

console.log(k.next());
console.log(k.next());
console.log(k.next().value);
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log('')

console.log(v.next());
console.log(v.next());
console.log(v.next().value);
console.log(v.next());
console.log(v.next());
console.log('');

console.log(e.next());
console.log(e.next());
console.log(e.next().value);
console.log('')

// ES6에서 추가. Iterator 객체의 값을 순차적으로 꺼내온다 next()를 순차적으로 호출
// 위에서 3번째까지 next()가 호출되었으므로 그 이후부터 출력된다.

// var i = 0;                   // index를 사용하려면 for~in(ES5) => for(var index in 순환객체) { }
for(var value of e) {
    // i++;
    console.log(value);
}


// find, findIndex

var objArray = [
    {id: 1, name: 'NolBu', age: 35}, 
    {id: 2, name: 'BangJa', age: 18}, 
    {id: 3, name: 'HungBu', age: 25}
];

function findObjArray(index) {
    return objArray[index];
}
console.log( findObjArray(3) );         // index로 매칭되는 요소가 없음.


// find => 객체 자체가 리턴된다.

// 조건에 매칭되는 요소가 전달
var findItem = objArray.find( function(item, index){
    return item.id === 3;
});
console.log(findItem);          // {id: 3, name: 'HungBu', age: 25}
console.log('')

// 매칭되는 값의 index가 리턴된다.
var index = objArray.findIndex( function(item, index){
    return item.id === 3;       // 2
});
console.log(index);
console.log(objArray[index]);   // {id: 3, name: 'HungBu', age: 25}

