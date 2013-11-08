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

  Asteroids.inherits(Asteroid, Asteroids.MovingObject);

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
  };

  Asteroid.prototype.split = function() {
    var child_rad = this.rad / 2;

    // u + PI/2, u + 3PI/2
    var child1_dir = (this.dir + (Math.PI / 2)) % (2 * Math.PI);
    var child2_dir = (this.dir + (3 * Math.PI / 2)) % (2 * Math.PI);

    // x = r * cos(u)
    var child1_xPos = (child_rad * Math.cos(child1_dir)) + this.xPos;
    var child2_xPos = (child_rad * Math.cos(child1_dir)) + this.xPos;

    // y = r * sin(u)
    var child1_yPos = (child_rad * Math.sin(child1_dir)) + this.yPos;
    var child2_yPos = (child_rad * Math.sin(child1_dir)) + this.yPos;

    var child1_pos = [child1_xPos, child1_yPos];
    var child2_pos = [child2_xPos, child2_yPos];

    var child1 = new Asteroid(child1_pos, this.spd, child1_dir, child_rad, "#FFFFFF");
    var child2 = new Asteroid(child2_pos, this.spd, child2_dir, child_rad, "#FFFFFF");

    return [child1, child2];
  };
})(this);
