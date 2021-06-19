class Player {
  constructor(x, u, d) {
    this.x = x + 5;
    this.xlen = 20;
    this.ylen = 50;
    this.y = height / 2 - this.ylen / 2;
    this.upKey = u;
    this.downKey = d;
  }
  display() {
    push();
    stroke(255);
    fill(255);
    rect(this.x, this.y, this.xlen, this.ylen);
    pop();
  }
  checkBall() {
    let bxi = ball.x + ball.len;
    let bxj = ball.x - ball.len;
    let byi = ball.y + ball.len;
    let byj = ball.y - ball.len;
    if (
      bxj <= this.x + this.xlen &&
      bxi >= this.x &&
      byj <= this.y + this.ylen &&
      byi >= this.y
    ) {
      ball.xspeed *= -1.1;
      ball.yspeed *= -1.1;
    }
  }
  move(t) {
    if (t == this.upKey && this.y > 0) {
      this.y -= 2;
    } else if (t == this.downKey && this.y + this.ylen < height) {
      this.y += 2;
    }
  }
  reset(){
    this.y = height / 2 - this.ylen / 2;
  }
}
