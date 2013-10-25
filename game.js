(function(root) {
  var AG = root.AG = (root.AG || {});

  AG.Game = Backbone.model.extend({
    intialize: function (ctx, width, height) {
      this.ctx = ctx;
      this.DIM_X = width;
      this.DIM_Y = height;
      this.asteroids = this.addAsteroids(20);
      this.bullets = [];
      this.ship = new AG.Ship("#FFFFFF");
    },

    addAsteroids: function(numAsteroids) {
      var result = [];

      for (var i = 0; i < numAsteroids; i++) {
        result.push(AG.Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y));
      }
      return result;
    },

    stop: function() {
      var that = this;
      var stop = function () {
        this.clearInterval(that.windowID);
      }

      stop();
    },

    checkCollisions: function() {
      var that = this;
      var chunks = [];
      var exploded = [];

      _(this.asteroids).each(function(asteroid) {
        if (asteroid.isCollidedWith(that.ship)) {
          alert("Ya done son~");
          that.stop();
        } else {
          _(that.bullets).each(function(bullet) {
            if (asteroid.isCollidedWith(that.bullet)) {
              chunks.push.apply(chunks, asteroid.split());
              exploded.push(asteroid);
            };
          });
        };
      });

      for (var i = 0; i < this.asteroids.length; i++) {
        if (
      };
    },

    draw: function() {
      var that = this;

      this.ctx.fillStyle="#000000";
      this.ctx.fillRect(0, 0, that.DIM_X, that.DIM_Y);

      _(this.asteroids).each(function(asteroid) {
        asteroid.draw(that.ctx);
      });

      _(this.bullets).each(function(bullet) {
        bullet.draw(that.ctx);
      });

      this.ship.draw(this.ctx);
    },

    move: function() {
      var that = this;

      _(this.asteroids).each(function(asteroid) {
        asteroid.move(that.DIM_X, that.DIM_Y);
      });

      _(this.bullets).each(function(bullet) {
        bullet.move(that.DIM_X, that.DIM_Y);
      });

      this.ship.move(that.DIM_X, that.DIM_Y);
    },

    step: function() {
      this.move();
      this.draw();
      this.checkCollisions();
    },

    start: function(wind) {
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

        that.step();
      }, 6.25);
    }
  });
})(this);
