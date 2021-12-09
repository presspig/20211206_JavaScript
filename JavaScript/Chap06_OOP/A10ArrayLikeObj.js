
var aryLike = {
    0: 'NulBu',
    1: 'HungBu',
    2: 'BangJa',
    length: 3,

    push: function(item) {
        return Array.prototype.push.call(this, item);
    },
    pop: function() {
        return Array.prototype.pop.call(this);
    },
    shift: function() {
        return Array.prototype.shift.call(this);
    },
    unshift: function(item) {
        return Array.prototype.unshift.call(this, item);
    }
}

aryLike.push('HongGilDong');
console.log(aryLike);

var x = aryLike.pop();
console.log(x, aryLike);

aryLike.unshift('Hong');
console.log(aryLike);

x = aryLike.shift();
console.log(x, aryLike);





