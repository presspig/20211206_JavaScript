
console.log('---------------- [307] Object -----------------');

var obj = {
    a: 1,
    b: 2,
    c: 3
};

Object.prototype.toText = function() {
    console.log('toText')
};
console.log(obj);

