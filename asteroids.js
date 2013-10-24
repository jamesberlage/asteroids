(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(pos, spd, dir, rad, color) {
    this.xPos = pos[0];
    this.yPos = pos[1];
    this.spd = spd;
    this.dir = dir;
    this.rad = rad;
    this.color = color;
  }

  Asteroid.MIN_RADIUS = 10;

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(maxX, maxY) {
    // a in [0, x_max)
    // b in [0, y_max)
    var pos = [Math.random() * maxX, Math.random() * maxY];

    // h in [0.5, 1.5)
    var spd = Math.random() + 0.5;

    // u in [0, 2 * PI)
    var dir = Math.random() * (2 * Math.PI);

    // r in [10, 20)
    var rad = (Math.random() + 1) * Asteroid.MIN_RADIUS;

    return new Asteroid(pos, spd, dir, rad, "#FFFFFF");
  }

})(this);
