var add = function(first, second) {
  return first + second;
};

var sub = function(first, second) {
  return first - second;
};

var mul = function(first, second) {
  return first * second;
};

var identityf = function(passedArg) {
  return function returnFunc() {
    return passedArg;
  };
};

var addf = function(firstArg) {
  return function(secondArg) {
    return firstArg + secondArg;
  };
};

var liftf = function(binaryFunction) {
  return function(argOne) {
    return function(argTwo) {
      return binaryFunction(argOne, argTwo);
    };
  };
};

var curry = function(func, firstArg) {
  return function insideFunc(secondArg) {
    return func(firstArg, secondArg);
  };
};

//var inc = addf(1);
//console.log(inc(2));
//var inc = liftf(add)(1);
//console.log(inc(2));
//var inc = curry(add, 1);
//console.log(inc(2));

var twice = function(binaryFunc) {
  return function unaryFunc(argOne) {
    return binaryFunc(argOne, argOne);
  };
};

var doub = twice(add);
//console.log(doub(11));
var square = twice(mul);
//console.log(square(11));

var reverse = function(funcToRev) {
  return function(argOne, argTwo) {
    return funcToRev(argTwo, argOne);
  };
};

//var bus = reverse(sub);
//console.log(bus(3,2));

var composeu = function(funcOne, funcTwo) {
  return function(argOne) {
    return funcTwo(funcOne(argOne));
  };
};

//console.log(composeu(doub, square)(10));

var composeb = function(funcOne, funcTwo) {
  return function (argOne, argTwo, argThree) {
    return funcTwo(funcOne(argOne, argTwo), argThree);
  };
};

//console.log(composeb(add, mul)(2,3,7));

var limit = function(binFunc, times) {
  var numTimesRun = 0;
  return function(argOne, argTwo) {
    numTimesRun += 1;
    if(numTimesRun <= times) { 
      return binFunc(argOne, argTwo);
    }
    return undefined;
  };
};

//var addLtd = limit(add, 2);
//console.log(addLtd(3,4));
//console.log(addLtd(3,5));
//console.log(addLtd(3,4));
//console.log(addLtd(3,5));

var from = function(start) {
  return function(){
    var currentNumber = start;
    start += 1;
    return currentNumber;
  };
};

//var index = from(5);
//console.log(index());
//console.log(index());
//console.log(index());

var to = function(genFunc, endVal) {
  return function() {
    var currentVal = genFunc();
    if(currentVal < endVal) {
      return currentVal;
    }
    return undefined;
  };
};

//var index = to(from(1), 3);
//console.log(index());
//console.log(index());
//console.log(index());

var fromTo = function(start, finish){
  return to(
    from(start),
    finish);
};

//var index = fromTo(0, 3);
//console.log(index());
//console.log(index());
//console.log(index());
//console.log(index());
//console.log(index());
//console.log(index());

var element = function(arr, genFunc) {
  return function() {
    if(genFunc === undefined) {
      genFunc = fromTo(0, arr.length);
    }
    var index = genFunc();
    if(index !== undefined){
      return arr[index];
    }
  };
};

//var ele = element(['a', 'b', 'c', 'd']);
//console.log(ele());
//console.log(ele());
//console.log(ele());
//console.log(ele());

var collect = function(genFunc, array) {
  return function(){
    var val = genFunc();
    if(val !== undefined) {
      array.push(val);
    }
    return val;
  };
};

var array = [], col = collect(fromTo(0,2), array);

//console.log(col());
//console.log(col());
//console.log(col());
//console.log(col());
//console.log(array);

var filter = function(genFunc, predicate) {
  return function() {
    var value;
    do {
      value = genFunc();
    } while(
      !predicate(value) && value !== undefined
    );
    return value;
  };
};

var fil = filter(fromTo(0, 5), 
  function third(value) {
    return (value % 3) === 0;
  }
);

//console.log(fil());
//console.log(fil());
//console.log(fil());
//console.log(fil());
//console.log(fil());
//console.log(fil());

var concat = function(genOne, genTwo) {
  var gen = genOne;
  return function(){
    var val = gen();
    if(val !== undefined) {
      return val;
    }
    gen = genTwo;
    return gen();
  };
};

var con = concat(fromTo(0, 2), fromTo(0, 3));
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
