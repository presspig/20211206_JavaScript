
console.log('---------------- [170, 252] Arguments -----------------');

// JavaScript의 함수는 매개변수의 수가 맞지 않아도 에러로 처리되지 않는다.
function onAdd() {
    // console.log(arguments);                     // 유사배열
    // console.log(arguments instanceof Array);
    // console.log(arguments instanceof Object);

    // console.log(x)

    var total = 0;
    for(var i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);
        var num = Number(arguments[i]);
        if( isNaN(num) ) continue;              // 이후 구문은 실행되지 않고 반복문의 처음으로 돌아간다
        else total = total + arguments[i];
    }

    console.log(`매개변수 개수: ${arguments.length}이고 합은 ${total}`);
}
// console.dir(onAdd);
// var x = 10;
onAdd();
onAdd(1);
onAdd(1, 2);
onAdd(1, 2, 3);
onAdd(1, 2, 'abc', 3);
console.log('')

function onPlus(str) {
    var total = 0;
    for(var i = 1; i < arguments.length; i++) {     // 1부터 시작해도 된다.
        // console.log(arguments[i]);
        var num = Number(arguments[i]);
        if( isNaN(num) ) continue;              // 이후 구문은 실행되지 않고 반복문의 처음으로 돌아간다
        else total = total + arguments[i];
    }

    console.log(`매개변수 개수: ${arguments.length}이고 ${str} ${total}`);
}

onPlus('Total: ', 1);
onPlus('합계: ', 1, 2);
onPlus('Total: ', 1, 2, 3);
onPlus('Total: ', 1, 2, 'abc', 3);
console.log('')

// ES6
function onSum(str, ...args) {
    // console.log(args)
    var total = 0;
    for(var i = 0; i < args.length; i++) {     // 1부터 시작해도 된다.
        var num = Number(args[i]);
        if( isNaN(num) ) continue;              // 이후 구문은 실행되지 않고 반복문의 처음으로 돌아간다
        else total = total + args[i];
    }

    console.log(`매개변수 개수: ${args.length}이고 ${str} ${total}`);
}

onSum('Total: ', 1);
onSum('합계: ', 1, 2);
onSum('Total: ', 1, 2, 3);
onSum('Total: ', 1, 2, 'abc', 3);
console.log('');


// 함수는 미리 평가된다
// 중복된 함수가 있으면 뒤에 기술한 함수가 앞의 함수를 덮어 씀.
function onMin() {
    console.log('ONE')
}

function onMin() {
    console.log('TWO')
}

onMin();

