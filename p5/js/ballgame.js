var xPos;
var yPos;
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;
var xPaddle;
var yPaddle;
var xSpeed = 2;
var ySpeed = 2;
var paddleWidth = 100;
var paddleHeight = 15;
var paddleDist;
var started = false;
var score = 0;
var xBall1 = Math.floor(Math.random() * 300) + 50;
var yBall1 = 50;
var xBallChange1 = 5;
var yBallChange1 = 5;
var end = false;

function setup(){
	createCanvas(windowWidth, windowHeight);
xPos = random(windowWidth);
	yPos = random(windowHeight);
}

function draw(){
	background(0);
	fill(255, 0, 255);
	noStroke();
	ellipse(xBall, yBall, diameter, diameter);
	xBall += xBallChange;
	yBall += yBallChange;


	if (xBall < diameter/2 ||
		xBall > windowWidth - 0.5*diameter){
		xBallChange *= -1;
	}
	if (yBall < diameter/2 ||
		yBall > windowHeight - diameter){
		yBallChange *= -1;
	}
	if (xBall1 < diameter/2 ||
		xBall1 > windowWidth - 0.5*diameter){
		xBallChange1 *= -1;
	}
	if (yBall1 < diameter/2 ||
		yBall1 > windowHeight - diameter){
		yBallChange1 *= -1;
	}
	if (!started){
	  	xPaddle = windowWidth / 2;
	  	yPaddle = windowHeight - 100;
	  	started = true;
	  	end = false;  
    }


    fill(0, 255, 255);
	noStroke();
	rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
	if ((xBall > xPaddle &&
		xBall < xPaddle + paddleWidth) &&
		(yBall + (diameter/2) >= yPaddle)){
		xBallChange *= -1;
	    yBallChange *= -1;
	    score++;
	}
	if ((xBall1 > xPaddle &&
		xBall1 < xPaddle + paddleWidth) &&
		(yBall1 + (diameter/2) >= yPaddle)){
		xBallChange1 *= -1;
	    yBallChange1 *= -1;
	    score++;
	}
	paddleDist = dist(xBall, yBall, xPos, yPos);
	if(paddleDist <= diameter){
		score++;
		xBall = random(diameter, windowWidth - diameter);
		yBall = random(diameter, windowHeight - diameter);
		ySpeed = ySpeed * -1.2;
		xSpeed = xSpeed * -1.2;

	}

	fill(0, 255, 255);
	textSize(24);
	text("Scroe: " + score, 10, 25);

	  if (score >= 10){
	fill(255, 242, 0);
	noStroke();
    	ellipse(xBall1, yBall1, diameter, diameter);
    	xBall1 += xBallChange1;
    	yBall1 += yBallChange1;
    }
}
function win(){
	end = true;
        background(200);
		text("Scroe: " + score, 'You win!!', '10', '50');
		textSize(40);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
}