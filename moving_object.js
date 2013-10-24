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

  MovingObject.prototype.move = function(DIM_X, DIM_Y) {
    this.xCoord = ((this.xCoord + this.xSpd + DIM_X + (3 * this.radius)) %
                  (DIM_X + (2 * this.radius))) - this.radius;
    this.yCoord = ((this.yCoord + this.ySpd + DIM_Y + (3 * this.radius)) %
                  (DIM_Y + (2 * this.radius))) - this.radius;
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.xCoord,
      this.yCoord,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.stroke();
  }

  MovingObject.prototype.offCanvasX = function(DIM_X) {
    return ((this.xCoord + this.radius) < 0 || (this.xCoord - this.radius) > DIM_X);
  }

  MovingObject.prototype.offCanvasY = function(DIM_Y) {
    return ((this.yCoord + this.radius) < 0 || (this.yCoord - this.radius) > DIM_Y);
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
