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

    console.log(this);
    this.asteroids.forEach(function(asteroid) {
      console.log(asteroid);
      asteroid.draw(that.ctx);
    });

    this.ctx.fillRect(50,50, 100, 100);
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

  Game.prototype.start = function() {
    console.log("We got here");
    setInterval(this.step(), 100);
  }
})(this);