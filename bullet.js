(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, spd, dir) {
    this.xPos = pos[0];
    this.yPos = pos[1];
    this.spd = spd;
    this.dir = dir;
    this.radius = 0.5;
    this.color = "#FF0000";
  }

  Bullet.inherits(Asteroids.MovingObject);
})(this);
