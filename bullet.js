(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, spd, dir) {
    this.xPos = pos[0];
    this.yPos = pos[1];
    this.spd = spd;
    this.dir = dir;
    this.rad = 1;
    this.color = "#FF0000";
  }

  Asteroids.inherits(Bullet, Asteroids.MovingObject);
})(this);
