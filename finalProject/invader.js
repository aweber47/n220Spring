function Invader(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
    this.toDelete = false;
    this.xdir = 1;
    this.bye = function() {
      this.r = this.toDelete = true;
    }
    this.shiftDown = function() {
      this.xdir *= -1;
      this.y += this.r;
    }
    this.move = function() {
      this.x = this.x + this.xdir;
    }
    this.show = function() {
      noStroke();
      fill("red");
      ellipse(this.x, this.y, this.r*2, this.r*2);
    }
  }