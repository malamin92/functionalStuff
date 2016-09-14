function bar(x, y){

    var z;
    return foo(x);

    function foo(x) {
    	y++;
    	z = x * y;
        return [y, z];
    }


}

console.log(bar(20,5));	// 120
console.log(bar(20,5)); // 120

console.log(bar(25,6));// 175
