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
