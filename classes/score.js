class Score {
  constructor(x) {
    this.amount = 0;
    this.p_amount = 0;
    this.x = x;
    this.y = 40;
  }
  increment() {
    this.amount++;
    if(this.amount > 0){
      this.p_amount++;
    }
  }
  display() {
    push();
    stroke(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(this.amount, this.x, this.y);
    pop();
  }
  reset() {
    this.amount = 0;
  }
}
