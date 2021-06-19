class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 3;
    this.xspeed = this.speed;
    this.yspeed = floor(random(-this.speed, this.speed));
    this.len = 20;
  }
  move() {
    this.checkEdges();
    if (this.yspeed == 0) {
      this.yspeed = floor(random(-this.speed, this.speed));
    }
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.xspeed >= this.speed * 1.5) {
      this.xspeed = this.speed;
    }
    if (this.yspeed >= this.speed * 1.5) {
      this.yspeed = this.speed;
    }
  }
  display() {
    push();
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.len);
    pop();
  }
  checkEdges() {
    if (this.x + this.len >= width) {
      scores[0].increment();
      this.reset("2");
      for(let i = 0; i < 2; i++){
        players[i].reset();
      }
    } else if (this.x - this.len <= 0) {
      scores[1].increment();
      this.reset("1");
      for(let i = 0; i < 2; i++){
        players[i].reset();
      }
    }
    if (this.y + this.len > height || this.y - this.len < 0) {
      this.yspeed *= -1.1;
      if (this.yspeed >= this.speed * 2) {
        this.yspeed = this.speed;
      }
    }
  }
  reset(tw) {
    this.x = width / 2;
    this.y = height / 2;
    this.yspeed = floor(random(-this.speed, this.speed));
    if (tw == "1") {
      this.xspeed = this.speed;
    } else {
      this.xspeed = -this.speed;
    }
  }
}
