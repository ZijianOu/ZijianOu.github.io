
//ball x, y position
var xPos;
var yPos;

//ball speed
var xSpeed;
var ySpeed;

//score
var score = 0;

//stores how close our mouse
var mouseDist;
//booleans can be either true of false
var start = false;
var end = false;
//runs once
function setup(){
	createCanvas(windowWidth, windowHeight);
	

	xPos = random(windowWidth);
	yPos = random(windowHeight);
	//print("x position: " + xPos);

	xSpeed = 2;
	ySpeed = 2;

	start = true;
}


//runs in loop
function draw(){
	if(start == true){
		game();
	}
	if(end == true){
		win();

	}
}

function windowResized(){

	resizeCanvas(windowWidth, windowHeight);
	xPos = random(15, windowWidth-15);
	yPos = random(15, windowHeight-15);

}

function game(){
background(200);
		text('Score:' + score +'00', '10', '50');
		textSize(40);
	//current xPos, updated it with the speed variable
	xPos = xPos + xSpeed;
	yPos = yPos + ySpeed;
	//print(xPos);

	//use variables for ball position
	ellipse(xPos, yPos, 30, 30)

	//check to see if the ball position has reached
	//edges of the screen if so reverse
	if((xPos >= windowWidth-15) || (xPos <= 15)){
		xSpeed = xSpeed * -1;
		fill(random(255), random(255), random(255));
	}
	if((yPos >= windowHeight-15) || (yPos <= 15)){
		ySpeed = ySpeed * -1;
		fill(random(255), random(255), random(255));
	}
	//calculating distance between mouse and ball
	mouseDist = dist(mouseX, mouseY, xPos, yPos);
	print(mouseDist);

	if(mouseDist <= 15){
		score++;
		xPos = random(15, windowWidth-15);
		yPos = random(15, windowHeight-15);
		ySpeed = ySpeed * -1.2;
		xSpeed = xSpeed * -1.2;

	}
	if(score == 15){
		start = false;
		end = true;
	}
}

function win(){
	background(200);
		text('YOU WIN!!', '10', '50');
		textSize(40);
}