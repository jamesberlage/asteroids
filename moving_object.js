(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  Function.prototype.inherits = function(SuperClass) {
    function Surrogate() {}

    Surrogate.prototype = SuperClass.prototype;

    this.prototype = new Surrogate();
  }

  MovingObject = Asteroids.MovingObject = function (pos, spd, dir, rad, color) {
    this.xPos = pos[0]; // a
    this.yPos = pos[1]; // b
    this.spd = spd;     // h
    this.dir = dir;     // u
    this.rad = rad;     // r
    this.color = color;
  }

  MovingObject.prototype.findX = function() {
    // h * cos(u) = x
    return this.spd * Math.cos(this.dir);
  }

  MovingObject.prototype.findY = function() {
    // h * sin(u) = y
    return this.spd * Math.sin(this.dir);
  }

  MovingObject.prototype.findPoint = function(angle) {
    // x = a + (r * cos(u))
    var x = this.xPos + (this.rad * Math.cos(this.dir + angle));
    // y = b + (r * sin(u))
    var y = this.yPos + (this.rad * Math.sin(this.dir + angle));

    return [x, y];
  }

  MovingObject.prototype.move = function(DIM_X, DIM_Y) {
    // a = a + x
    var newXpos = this.findX() + this.xPos;
    // b = b + y
    var newYpos = this.findY() + this.yPos;

    if (newXpos > DIM_X) {
      newXpos = 0;
    } else if (newXpos < 0) {
      newXpos = DIM_X;
    };

    if (newYpos > DIM_Y) {
      newYpos = 0;
    } else if (newYpos < 0) {
      newYpos = DIM_Y;
    };

    this.xPos = newXpos;
    this.yPos = newYpos;
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.xPos,
      this.yPos,
      this.rad,
      0,
      2 * Math.PI,
      false
    );

    ctx.stroke();
  }

  MovingObject.prototype.isCollidedWith = function(other) {
    // dx = a1 - a2
    var newXpos = this.xPos - other.xPos;
    // dy = b1 - b2
    var newYpos = this.yPos - other.yPos;

    // m = sqrt(dx ^ 2 + dy ^ 2)
    var distance = Math.sqrt(Math.pow(newXpos, 2) + Math.pow(newYpos, 2));

    // r1 + r2 > m
    if ((this.rad + other.rad) > distance) {
      return true;
    } else {
      return false;
    }
  }

})(this);
