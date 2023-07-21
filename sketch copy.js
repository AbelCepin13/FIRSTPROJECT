let paddleX1=15;
let paddleY1=550/2
let paddleX2=685;
let paddleY2=550/2;
let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let states=1;
let player1Score=0
let player2Score=0
function setup(){
    createCanvas(700,550);
}
function draw(){

  if(states==1){
    background(252, 186, 3)
    fill(255,0,0);
    rect(150,275,100,100);
    fill(255,255,255);
    text("EASY",150,275,100,100)
    fill(0,255,0);
    rect(250,275,100,100);
    fill(255,255,255);
    text("MEDIUM",250,275,100,100);
    fill(0,0,255);
    rect(350,275,100,100);
    fill(255,255,255);
    text("HARD",350,275,100,100);
  }
  if (states==2){
  background(0);
  rectMode(CENTER);
  rect(paddleX1,paddleY1,10,80);
  rect(paddleX2,paddleY2,10,80);
  if (keyIsDown(UP_ARROW)) {  
    paddleY2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    paddleY2 += 10;
  }
  if (keyIsDown(87)) {
    paddleY1 -= 10;
  }
  if (keyIsDown(83)) {
    paddleY1 += 10;
  }
  paddleY1=constrain(paddleY1,40,height-40);
  paddleY2=constrain(paddleY2,40,height-40);

  
movingBall();
displayScores();
  }
}
function mouseClicked(){
  if (mouseX>150 && mouseX<250&& mouseY>275&&mouseY<375){
    states=2;
    xSpeed=3;
    ySpeed=3;
}   
  if (mouseX>250 && mouseX<350&& mouseY>275&&mouseY<375){
    states=2;
    xSpeed=6;
    ySpeed=6;

} 
  if (mouseX>350 && mouseX<450&& mouseY>275&&mouseY<375){
    states=2;
    xSpeed=10;
    ySpeed=10;
} 

}
function movingBall(){
   ellipse(xPos, yPos, 50, 50);
    xPos+=xSpeed;
   yPos+=ySpeed;
if (yPos >= 525 || yPos<=25) {
    ySpeed*=-1;
  }
if (xPos-25<=paddleX1+5 && yPos-25<=paddleY1-40 && yPos-25<=paddleY1+40 ){
  xSpeed *=-1;
}
if (xPos+25>=paddleX2-5 && yPos-25>=paddleY2-40 && yPos-25>=paddleY2+40 ){
  xSpeed *=-1;
}
if (xPos - 25 <= 0) {
  player2Score++;
  resetBall();
} else if (xPos + 25 >= width) {
  player1Score++;
  resetBall();
}
}

function displayScores() {
  textSize(32);
  fill(255);
  textAlign(CENTER);
  text(player1Score, width / 4, 50);
  text(player2Score, width * 3 / 4, 50);
}
function resetBall() {
  let randomInt = Math.round(random() * 2 - 1);
  xPos = width / 2;
  yPos = height / 2;
  xSpeed = random(7, 5)*randomInt;
  ySpeed = random(7, 5)*randomInt;
}
