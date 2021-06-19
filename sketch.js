let ball;
let players = [];
let scores = [];
let guidelines = true;
let p_scores = [];

function setup() {
  createCanvas(550, 350);
  ball = new Ball();
  for (let i = 0; i < 2; i++) {
    let s = 0;
    let u = "w";
    let d = "s";
    if (i == 1) {
      s = width - 30;
      u = "u";
      d = "d";
    }
    players[i] = new Player(s, u, d);
  }
  for (let i = 0; i < 2; i++) {
    let s = width / 2 - 50;
    if (i == 1) {
      s = width / 2 + 50;
    }
    scores[i] = new Score(s);
  }
}

function draw() {
  // these will never be changed throughout the game
  background(0);
  stroke(255);
  fill(255);

  if (guidelines) {
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
    fill(0);
    ellipse(width / 2, height / 2, ball.len);
    noFill();
    ellipse(width / 2, height / 2, ball.len * 4);
  }

  ball.display();
  ball.move();

  if (mouseIsPressed) {
    if (mouseY >= height / 2) {
      players[1].move("d");
    } else if (mouseY < height / 2) {
      players[1].move("u");
    }
  }

  if (keyIsPressed) {
    players[0].move(key);
    if (key == "r"){
      for (let i = 0; i < 2; i++) {
        players[i].reset();
        scores[i].reset();
      }
      ball.reset("1")
    }
  }

  for (let i = 0; i < 2; i++) {
    players[i].display();
    players[i].checkBall();
    scores[i].display();
  }
}
