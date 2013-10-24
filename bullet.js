(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, vel) {
    this.xCoord = pos[0];
    this.yCoord = pos[1];
    this.xSpd = vel[0];
    this.ySpd = vel[1];
    this.radius = 0.5;
    this.color = "#FF0000";
  }

  Bullet.inherits(Asteroids.MovingObject);
})(this);
