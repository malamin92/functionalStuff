// 05 Context
DOT = function(obj, prop){
  if( obj.hasOwnProperty(prop) ){
    return obj[prop];
  } 
  return DOT( obj.__proto__, prop );
}

// 05 Context
DOTCALL = function(obj, prop, args){
  var func = DOT(obj, prop);

  if( func ){
    return func.apply( obj, args );
  }
}

// 06 Prototypes
NEW = function(constructor, args){
  // what is the new keyword doing??
  // 1. creating a new object.
  var o = {};
  // 2. point the new objects __proto__ to our constructors prototype object
  o.__proto__ = constructor.prototype;
  // 3. invoke the constructor with our new object as context
  constructor.apply(o, args);
  // 4. returning the new object we just created.
  return o;
}

INSTANCEOF = function(obj, constructor){
  if(obj.__proto__ === constructor.prototype){
    return true;
  }
  else if(obj.__proto__){
    return INSTANCEOF(obj.__proto__, constructor);
  }
  return false;
}
