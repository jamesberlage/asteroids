var sum = function() {
  var result = this.age;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  };

  return result;
}

Function.prototype.myBind = function(obj) {
  var that = this;

  otherArgs = [];
  for (var i = 1; i < arguments.length; i++) {
    otherArgs.push(arguments[i]);
  }

  var result = function() {
    var newArgs = otherArgs;
    for (var j = 0; j < arguments.length; j++) {
      newArgs.push(arguments[j]);
    }
    return that.apply(obj, newArgs);
  };
  return result;
}


function Cat (age) {
  this.age = age;
}

// test(1, 5);

c = new Cat(5);

// var newSum = sum.myBind(c, 3, 4);
//
// console.log(newSum(2));

Function.prototype.curry = function() {
  var that = this;
  var args = [];

  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  var result = function() {
    var newArgs = args;
    for (var j = 0; j < arguments.length; j++) {
      newArgs.push(arguments[j]);
    }
    return that.apply(that, newArgs);
  }
  return result;
}

var curriedSum = function(threshold) {
  var result = function() {
    if (arguments.length >= threshold) {
      var sum = 0;
      for (var i = 0; i < threshold; i++) {
        sum += arguments[i];
      }
      return sum;
    } else {
      return result.curry.apply(result, arguments);
    }
  }
  return result;
}

var currySum = curriedSum(4);
console.log( currySum(5)(2)(1)(6) );



