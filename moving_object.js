(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  Function.prototype.inherits = function(SuperClass) {
    function Surrogate() {}

    Surrogate.prototype = SuperClass.prototype;

    this.prototype = new Surrogate();
  }

  MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color) {
    this.xCoord = pos[0];
    this.yCoord = pos[1];
    this.xSpd = vel[0];
    this.ySpd = vel[1];
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.move = function() {
    this.xCoord += this.xSpd;
    this.yCoord += this.ySpd;
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.xCoord,
      this.yCoord,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  }

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var x = (this.xCoord - otherObject.xCoord);
    var y = (this.yCoord - otherObject.yCoord);

    var distance = Math.sqrt((x * x) + (y * y));

    if ((this.radius + otherObject.radius) > distance) {
      return true;
    } else {
      return false;
    }
  }

})(this);