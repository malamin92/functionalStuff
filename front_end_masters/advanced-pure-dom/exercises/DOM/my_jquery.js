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
    next: function() {
      elemArray = [];

      $.each(this, function(index, element) {
        var current = element.nextSibling;
        
        while(current && current.nodeType != 1){
          current = current.nextSibling;
        }

        if( current ) {
          elemArray.push(current);
        }
        //if( element.nextSibling.nodeType === 1 ){
        //  elemArray.push(element);
        //} else if( element.nextSibling.nodeType === 3 ){
        //  element.next();
        //} 
      });

      return $(elemArray);
    },
    prev: function() {
      elementsArray = [];

      $.each(this, function(index, element) {
        var current = element.previousSibling;

        while( current && current.nodeType != 1 ){
          current = current.previousSibling;
        }
        
        if(current) {
          elementsArray.push( current );
        }
      });

      return $( elementsArray );
    },
    parent: function() {},
    children: function() {},
    attr: function(attrName, value) {},
    css: function(cssPropName, value) {},
    width: function() {},
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
