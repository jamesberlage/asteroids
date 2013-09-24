(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function(color) {
    this.xCoord = 250;
    this.yCoord = 250;
    this.xSpd = 0;
    this.ySpd = 0;
    this.direction = Math.PI / 2;
    this.radius = 10;
    this.color = color;
  }

  Ship.inherits(Asteroids.MovingObject);

  Ship.initialize = function(color) {
    return new Ship(color);
  }

  Ship.prototype.power = function (impulse) {
    var x = Math.sin(Math.PI - this.direction);
    var y = Math.cos(Math.PI - this.direction);

    if (direction >= (Math.PI / 2) && direction < (3 * Math.PI / 2)) {
      x = -x;
    }

    if (direction >= Math.PI && directon < (2 * Math.PI)) {
      y = -y;
    }

    this.xSpd += x;
    this.ySpd += y;
  }

})(this);