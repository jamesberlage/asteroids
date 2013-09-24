(function (root) {
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
    var x = (this.pos[0] - otherObject.pos[0]);
    var y = (this.pos[1] - otherObject.pos[1]);

    var distance = Math.sqrt((x * x) + (y * y));

    if ((this.radius + otherObject.radius) > distance) {
      return true;
    } else {
      return false;
    }
  }

  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius, color) {
    this.xCoord = pos[0];
    this.yCoord = pos[1];
    this.xSpd = vel[0];
    this.ySpd = vel[1];
    this.radius = radius;
    this.color = color;
  }

  Asteroid.MAX_RADIUS = 10;

  Asteroid.inherits(MovingObject);

  Asteroid.randomAsteroid = function(maxX, maxY) {
    var pos = [Math.random() * maxX, Math.random() * maxY];
    var vel = [(Math.random() * 10) - 5, (Math.random() * 10) - 5];
    var radius = Math.random() * Asteroid.MAX_RADIUS;

    return new Asteroid(pos, vel, radius, "red");
  }
})(this);
