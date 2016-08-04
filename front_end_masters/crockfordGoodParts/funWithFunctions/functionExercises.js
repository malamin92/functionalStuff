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
