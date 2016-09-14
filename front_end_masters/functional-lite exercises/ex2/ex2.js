function foo(x, y) { /* .. */
    return function() {
        var sum = 0;
        for(var i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return x + y + sum;
    }
 }

var x = foo(3,4);

console.log(x());	// 7
console.log(x());   // 7
console.log(x());   // 7
x();	// 7
