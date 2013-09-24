(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function(color) {
    this.xCoord = 250;
    this.yCoord = 250;
    this.xSpd = 0;
    this.ySpd = 0;
    this.direction = 0;
    this.radius = 10;
    this.color = color;
  }

  Ship.inherits(Asteroids.MovingObject);

  Ship.initialize = function(color) {
    return new Ship(color);
  }

})(this);