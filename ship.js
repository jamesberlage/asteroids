(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function(color) {
    this.xPos = 250;
    this.yPos = 250;
    this.spd = 0;
    this.dir = (3 * Math.PI) / 2;
    this.rad = 10;
    this.color = color;
  }

  Ship.inherits(Asteroids.MovingObject);

  Ship.initialize = function(color) {
    return new Ship(color);
  }

  Ship.prototype.draw = function(ctx) {

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    var nose = this.findPoint(0);
    var left = this.findPoint((3 * Math.PI) / 4);
    var right = this.findPoint((5 * Math.PI) / 4);

    ctx.moveTo(nose[0], nose[1]);
    ctx.lineTo(left[0], left[1]);
    ctx.lineTo(right[0], right[1]);
    ctx.lineTo(nose[0], nose[1]);

    ctx.stroke();
  }

  Ship.prototype.power = function(impulse) {
    this.spd += impulse;

    if (this.spd > 1) {
      this.spd = 1;
    } else if (this.spd < 0) {
      this.spd = 0;
    };
  }

  Ship.prototype.torque = function(pivot) {
    if (pivot === "right") {
      this.dir = (this.dir + 0.1) % (2 * Math.PI)
    } else if (pivot === "left") {
      this.dir = (this.dir - 0.1 + (2 * Math.PI)) % (2 * Math.PI);
    } else {
      alert("invalid movement");
    }
  }

  Ship.prototype.fireBullet = function() {
    return new Asteroids.Bullet([this.xPos, this.yPos], 1.5, this.dir);
  }

})(this);
