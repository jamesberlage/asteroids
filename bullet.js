(function(root) {
  var AG = root.AG = (root.AG || {});

  AG.Bullet = AG.MovingObject.extend({
    initialize: function(pos, spd, dir) {
      this.xPos = pos[0];
      this.yPos = pos[1];
      this.spd = spd;
      this.dir = dir;
      this.rad = 1;
      this.color = "#FF0000";
    }
  });
})(this);
