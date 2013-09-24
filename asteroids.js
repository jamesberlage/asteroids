(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius, color) {
    this.xCoord = pos[0];
    this.yCoord = pos[1];
    this.xSpd = vel[0];
    this.ySpd = vel[1];
    this.radius = radius;
    this.color = color;
  }

  Asteroid.MAX_RADIUS = 10;

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(maxX, maxY) {
    var pos = [Math.random() * maxX, Math.random() * maxY];
    var vel = [(Math.random()) - 0.5, (Math.random()) - 0.5];
    var radius = (Math.random() + 1) * Asteroid.MAX_RADIUS;

    return new Asteroid(pos, vel, radius, "#FFFFFF");
  }

})(this);
