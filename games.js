(function(root) {
  var Games = root.Games = (root.Games || {});

  var Game = Games.Game = function (ctx, width, height) {
    this.ctx = ctx;
    this.asteroids = this.addAsteroids(20);
    this.DIM_X = width;
    this.DIM_Y = height;
  }

  Game.prototype.addAsteroids = function (numAsteroids) {
    var result = [];
    for (var i = 0; i < numAsteroids; i++) {
      result.push(root.Asteroids.Asteroid.randomAsteroid(500, 500));
    }
    return result;
  }

  Game.prototype.draw = function() {
    var that = this;

    this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(that.ctx);
    });
  }

  Game.prototype.move = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
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