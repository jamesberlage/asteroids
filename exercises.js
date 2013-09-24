var sum = function() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  };

  return result;
}

console.log(sum(1,2,3,4));