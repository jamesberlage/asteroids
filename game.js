(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx, width, height) {
    this.ctx = ctx;
    this.DIM_X = width;
    this.DIM_Y = height;
    this.asteroids = this.addAsteroids(20);
    this.bullets = [];
    this.ship = root.Asteroids.Ship.initialize("#FFFFFF");
  }

  Game.prototype.reset = function() {
    this.asteroids = this.addAsteroids(20);
    this.bullets = [];
    this.ship = root.Asteroids.Ship.initialize("#FFFFFF");
  }

  Game.prototype.addAsteroids = function(numAsteroids) {
    var result = [];

    for (var i = 0; i < numAsteroids; i++) {
      result.push(Asteroids.Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y));
    }
    return result;
  }

  Game.prototype.stop = function() {
    var that = this;
    var stop = function () {
      this.clearInterval(that.windowID);
    }

    stop();
  }

  Game.prototype.checkCollisions = function(callback) {
    // Check collision with asteroid
    var new_asteroids = [];

    for (var i = 0; i < this.asteroids.length; i++) {
      var notCollided = true;
      var asteroid = this.asteroids[i];

      this.bullets.every(function(bullet) {
        if (bullet.isCollidedWith(asteroid)) {
          if ((asteroid.rad / 2) >= 1) {
            new_asteroids.push.apply(new_asteroids, asteroid.split());
          };
          notCollided = false;
          return false;
        } else {
          return true;
        };
      });

      if (notCollided) {
        new_asteroids.push(asteroid);
      };
    };

    this.asteroids = new_asteroids;

    // Check collision with ship
    for (var j = 0; j < this.asteroids.length; j++) {
      if (this.asteroids[j].isCollidedWith(this.ship)) {
        this.stop();
        callback();
      };
    };
  };

  Game.prototype.flagExtra = function() {
    var that = this;

    if (this.asteroids.length > 50) {
      var aLen = this.asteroids.length % 50
      for (var i = 0; i < aLen; i++) {
        this.asteroids[i].toDelete = true;
      };
    };

    if (this.bullets.length > 300) {
      var bLen = this.bullets.length % 300
      for (var j = 0; j < bLen; j++) {
        this.bullets[j].toDelete = true;
      };
    };
  }

  Game.prototype.purgeExtra = function() {
    var aLen = this.asteroids.length
    for (var i = (aLen - 1); i >= 0; i--) {
      if (this.asteroids[i].xPos == null || this.asteroids[i].yPos == null) {
        this.asteroids.splice(i, 1);
      };
    };

    var bLen = this.bullets.length
    for (var j = (bLen - 1); j >= 0; j--) {
      if (this.bullets[j].xPos == null || this.bullets[j].yPos == null) {
        this.bullets.splice(j, 1);
      };
    };
  }

  Game.prototype.draw = function() {
    this.ctx.fillStyle="#000000";
    this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    };

    for (var j = 0; j < this.bullets.length; j++) {
      this.bullets[j].draw(this.ctx);
    };

    this.ship.draw(this.ctx);
  }

  Game.prototype.move = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move(this.DIM_X, this.DIM_Y);
    };

    for (var j = 0; j < this.bullets.length; j++) {
      this.bullets[j].move(this.DIM_X, this.DIM_Y);
    };

    this.ship.move(this.DIM_X, this.DIM_Y);
  }

  Game.prototype.step = function(lossCallback, winCallback) {
    if (this.asteroids.length === 0) {
      this.stop();
      winCallback();
    };
    this.move();
    this.draw();
    this.flagExtra();
    this.purgeExtra();
    this.checkCollisions(lossCallback);
  }

  Game.prototype.start = function(wind, lossCallback, winCallback) {
    var that = this;
    this.windowID = wind.setInterval(function() {
      if (key.isPressed("up")) {
        that.ship.power(0.05);
      } else if (key.isPressed("down")) {
        that.ship.power(-0.05);
      };

      if (key.isPressed("left")) {
        that.ship.torque("left");
      } else if (key.isPressed("right")) {
        that.ship.torque("right");
      };

      if (key.isPressed("space")) {
        that.bullets.push(that.ship.fireBullet());
      };

      that.step(lossCallback, winCallback);
    }, 6.25);
  }
})(this);
