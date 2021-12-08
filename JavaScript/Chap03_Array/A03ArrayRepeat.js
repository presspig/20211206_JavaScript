
console.log('---------------- [492] Array 반복 메서드 -----------------');

var ary = [10, 11, 100, 101, 1000];

for(var i = 0; i < ary.length; i++) {
    console.log(i, ary[i]);
};
console.log('');

// 순환문
ary.forEach( function(item, index){
    console.log(index, item);
});
console.log('');

// map => 순환. 순환하면서 조작한 값을 return하면 그 값을 기반으로 새로운 배열을 생성해 준다.
var newArray = ary.map( function(item, index){
    var result = item * 2;
    return result;
});
console.log(newArray);
console.log('');


// filter => 순환. 조작한 값이 true면 새로운 배열에 추가, false면 추가 안함.
var filterArray = ary.filter( function(item, index){
    if( item % 2 === 0 ) return item;
    else return false;
});
console.log(filterArray);
console.log('')


// reduce. 누적을 구한다.
var sum = ary.reduce(function(x, item){     // item은 순환값
    console.log(x, item);
    // return item;        // 이 리턴값이 다음 콜백함수 실행시 x에 대입 되는 값.

    return x + item;

}, 0);                // 콜백 함수가 처음 실행될때 매개변수 x의 값.
console.log(sum);



var names = ['NolBu', 'HungBu', 'BangJa', 'HongGilDong', 'HungBu', 'BangJa',]

var nameCnt = names.reduce(function(obj, item) {
    if( !obj[item] ) obj[item] = 1;
    else obj[item] = obj[item] + 1;

    return obj;
}, {});
console.log(nameCnt);

/*
    {
        'NolBu': 1,
        'HungBu': 2,
        'BangJa': 1,

    }
*/

