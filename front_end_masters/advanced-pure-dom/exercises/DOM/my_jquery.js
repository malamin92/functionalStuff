(function() {
  $ = function(selector) {

    if(!( this instanceof $ ) ){
      return new $(selector);
    }

    var elements;

    if(typeof selector === "string"){
      elements = document.querySelectorAll(selector);
    } else {
      elements = selector;
    }

    Array.prototype.push.apply(this, elements)

      // for(var i = 0; i < elements.length; i++) {
      //   this[i] = elements[i];
      // }
      // this.length = elements.length;

  };

  $.extend = function(target, object) { for ( var prop in object ) {
    target[prop] = object[prop];
  }
  return target;
  };

  // Static methods
  var isArrayLike = function(obj) {
    if( typeof obj.length === "number" ) {
      if( obj.length === 0 ){
        return true;
      } else if( obj.length > 0 ) {
        return ( obj.length -1 ) in obj ;
      }
    }
    return false;
  };

  $.extend($, {
    isArray: function(obj) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    },
    each: function(collection, cb) {
      if( isArrayLike( collection ) ) {
        for( var i = 0; i < collection.length; i++ ){
          cb.call( collection[i], i, collection[i] );
        }
      } else {
        for(var prop in collection) {
          if(collection.hasOwnProperty(prop)) {
            cb.call(collection[prop], prop, collection[prop]);
          }
        }
      }
      return collection;
    },
    makeArray: function(arr) {
      var array = [];
      $.each(arr, function(i, val){
        array.push(val);
      })
      return array;
    },
    proxy: function(fn, context) {
      return function(){
        return fn.apply(context, arguments);
      }
    }
  });

  var makeTraverser = function(cb){
    return function() {
      var elements = [], args = arguments;

      $.each(this, function(index, element){
        var ret = cb.apply(element, args);

        if(ret && isArrayLike(ret)) {
          [].push.apply( elements, ret );
        } else if(ret) {
          elements.push( ret )
        }
      });

      return $(elements);
    }
  }

  var getText = function(childNodes) {
    var text = "";
    $.each(childNodes, function(i, child) {
      if (child.nodeType === 3) {
        text += child.nodeValue;
      } else {
        text += getText(child.childNodes);
      }
    });
    return text;
  };

  $.extend($.prototype, {
    html: function(newHtml) {
      if(arguments.length){
        $.each(this, function(index, elem){
          elem.innerHTML = newHtml;
        })
        return this;
      } else {
        return this[0].innerHTML;
      }
    },
    val: function(newVal) {
      if(arguments.length){
        $.each(this, function(index, elem){
          return elem.value = newVal;
        })
        return this;
      } else {
        return this[0].value;
      }
    },
    text: function(newText) {
      if (arguments.length) {
        this.html("");
        return $.each(this, function(i, element) {
          var textNode = document.createTextNode(newText);
          element.appendChild(textNode);
        });
      } else {
        return getText(this[0].childNodes);
      }
    },
    find: function(selector) {
      elements = [];
      console.log(selector);

      $.each(this, function(index, element){
        var elems = element.querySelectorAll(selector);
        Array.prototype.push.apply(elements, elems);
      });

      return $(elements);
    },
    next: makeTraverser(function(){
      var current = this.nextSibling;

      while(current && current.nodeType != 1){
        current = current.nextSibling;
      }

      if(current){
        return current;
      }
    }),
    prev: makeTraverser(function(){
      var current = this.previousSibling;

      while( current && current.nodeType != 1 ){
        current = current.previousSibling;
      }

      if( current ) {
        return current;
      }
    }),
    parent: makeTraverser(function(){
      return this.parentNode;
    }),
    children: makeTraverser(function(){
      return this.children;
    }),
    attr: function(attrName, value) {
      if( arguments.length > 1 ){
        $.each(this, function(index, element){
          return element.setAttribute( attrName, value );
        });
      } else {
        return this[0]  && this[0].getAttribute(attrName);
      }
    },
    css: function(cssPropName, value) {
      if( arguments.length > 1 ){
        $.each(this, function(index, element){
          return element.style[cssPropName] = value;
        });
      } else {
        return this[0]  && document.defaultView.getComputedStyle(this[0]).getPropertyValue(cssPropName);
      }
    },
    width: function() {
      var clientWidth = this[0].clientWidth;
      var leftPadding = this.css("padding-left"),
          rightPadding = this.css("padding-right");

      return clientWidth - parseInt(leftPadding) - parseInt(rightPadding);
    },
    offset: function() {
      var offset = this[0].getBoundingClientRect();
      return {
        top: offset.top + window.pageYOffset,
        left: offset.left + window.pageXOffset
      };
    },
    hide: function() {},
    show: function() {},

    // Events
    bind: function(eventName, handler) {},
    unbind: function(eventName, handler) {},
    has: function(selector) {
      var elements = [];

      $.each(this, function(i, el) {
        if(el.matches(selector)) {
          elements.push(el);
        }
      });

      return $( elements );
    },
    on: function(eventType, selector, handler) {
      return this.bind(eventType, function(ev){
        var cur = ev.target;
        do {
          if ($([ cur ]).has(selector).length) {
            handler.call(cur, ev);
          }
          cur = cur.parentNode;
        } while (cur && cur !== ev.currentTarget);
      });
    },
    off: function(eventType, selector, handler) {},
    data: function(propName, data) {},

    // Extra
    addClass: function(className) {},
    removeClass: function(className) {},
    append: function(element) {}
  });

  $.buildFragment = function(html) {};
})();
