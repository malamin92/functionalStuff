// code here! :)
function foo(x){
    return function() {
        return x;
    }
}

function add(x, y){
    return x + y;
}

function add2(fn1, fn2){
    return add(fn1(), fn2());
}

//using for loop
function addn(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = add2( foo(arr[i]), foo(sum) );
    }
    return sum;
}

//using recurse
function addnr(arr){
    if ( arr.length <= 2 ) {
        return add2( arr[0], arr[1] );
    } else {
        return addnr([function(){
                return add2(arr[0], arr[2]);
            }]
            .concat(arr.slice(2))
        );
    }
}

//using map & reduce
function addnm(arr) {
    return arr.slice(1)
        .reduce(function(previous, current){
            return function() {
                return add2( previous, current);
            }
        }, arr[0])();
}