(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (ctx, width, height) {
    this.ctx = ctx;
    this.asteroids = this.addAsteroids(20);
    this.ship =  root.Asteroids.Ship.initialize("blue");
    this.DIM_X = width;
    this.DIM_Y = height;
  }

  Game.prototype.addAsteroids = function (numAsteroids) {
    var result = [];
    for (var i = 0; i < numAsteroids; i++) {
      result.push(Asteroids.Asteroid.randomAsteroid(500, 500));
    }
    return result;
  }

  Game.prototype.draw = function() {
    var that = this;

    that.ctx.clearRect(0, 0, that.DIM_X, that.DIM_Y);

    that.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    });
    that.ship.draw(that.ctx);
  }

  Game.prototype.move = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
    this.ship.move();
  }

  Game.prototype.step = function() {
    this.move();
    this.draw();
  }

  Game.prototype.start = function(wind) {
    var that = this;
    wind.setInterval(function() {
      that.step();
    }, 50);
  }
})(this);