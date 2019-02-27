var xPos;
var yPos;

var xSpeed;
var ySpeed;

var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;

var xBallChange = 5;
var yBallChange = 5;

var score = 0;

var start;
var end;

let x = 100;
let y = 100;

function setup() {

	xPos = (windowWidth);
	yPos = (windowHeight);

	xSpeed = 2;
	ySpeed = 2;

	  createCanvas(windowWidth, windowHeight);
	  	start = true;
}



function draw(){
	background(200);
	fill(255, 0, 255);
	noStroke();
	ellipse(xBall, yBall, diameter, diameter);
	if(start == true){
		game();
	}
	if(end == true){
		score();
	}

	  if (keyIsDown(LEFT_ARROW)) {
    x -= 30;
  }

      if (keyIsDown(RIGHT_ARROW)) {
    x += 30;
  }

      if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

      if (keyIsDown(DOWN_ARROW)) {
    y += 5;
      }

  //clear();
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(x, y, 200, 10);

fill(250);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	xPos = random(15, windowWidth-15);
	yPos = random(15, windowHeight-15);

}

function game(){
	background(200);
	text('Score:' + score + '00', '10', '50');
	textSize(40);
}