function SuperClass() {

}

function SubClass() {

}

Subclass.prototype.inherits = function(SuperClass) {
  function Surrogate() {

  }

  Surrogate.prototype = SuperClass.prototype;

  Subclass.prototype = new Surrogate();

}

