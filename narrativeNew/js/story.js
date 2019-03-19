
var canvas;

var userName;
var title;

var firstOption;
var secondOption;
var thirdOption;
 

var greeting;
var nameInput;

var runmanSlider;
var runmanSpeed = 2;
var runmanPos;
var runmanX = 10;
var runmanScale;

var tricycle;
var beats;
var marathon;
var Late;
var startOver;



function preload(){
	
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	background(255);
	beginning();
}

function draw() {
	background(255);
		runmanAnim();
	print(runmanX);

	


}

function beginning(){
	background(100);
	

	greeting = createP("Please type your name and press 'Enter'");
	nameInput = createInput();


	nameInput.changed(startStory);
	
}



function startStory(){
	
	greeting.hide();
	nameInput.hide();
	
	userName = createElement('h1', nameInput.value());

	title = createElement('h1', 'Hurry up! You are running late for school!!!');

	
	firstOption = createA("#", ">>Go to bus station without hesitation");
	createElement('br');
	secondOption = createA("#", ">>Nah, it's ok to be late");
	createElement('br');
	thirdOption = createA("#", ">>Take your little sister's tricycle")
	createElement('br');
	Late = createImg("Late.jpg");
	Late.style('width', '250px');
	
	firstOption.mousePressed(walkToBusStation);
	secondOption.mousePressed(Whatever);
	thirdOption.mousePressed(TakeSistersBike);


}


function TakeSistersBike(){
	background(123);

	thirdOption.hide();
	Late.hide();
	tricycle = createImg("tricycle.jpg")
	tricycle.style('width', '250px');
	userName.hide();
 

	title.html("People laugh at you");
	firstOption.html(">>Stop and cry");
	secondOption.html(">>Go faster");
	thirdOption.hide();

	firstOption.mousePressed(Cry);
	secondOption.mousePressed(GoFaster);
}
function Cry(){	
	background(424);
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	Late.hide();

	userName.hide();
 

	title.html("You are late for school!");
	tricycle.hide();

}
function GoFaster(){
	background(424);
	title.html("Congratulations" + " " + nameInput.value() + "! " + "  " + "You made it to school on time and broke the fastest record of any adult riding a children's tricycle!");
	guinness = createImg("guinness.png");
	guinness.style('width', '100px');
	firstOption.hide();
	secondOption.hide();
	tricycle.hide();

}
function walkToBusStation(){
    runman = createImg("run.gif");
	runmanSlider = createSlider(0,255,0);


	

	bus = createImg("bus.png");
	bus.style('width', '200px');
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	Late.hide();

	userName.hide();
 

	title.html("Control the slider! Run to the bus!");

}
function runmanAnim(){
	runmanScale = runmanSlider.value();
	runman.position(runmanX, 200);
	runman.style('width', runmanSlider.value() + 'px');
	if(runmanX > windowWidth +100){
		runmanX = 0;
	}
	Late.hide();
	//runman.mousePressed()
}

function Whatever(){
	background(111);
	beats = createImg("beats.png");
	beats.style('width', '400px');
	userName.hide();
	Late.hide();
	title.html(nameInput.value() + ', your dad got really mad.');

	firstOption.html(">>Run");
	secondOption.html(">>Apologize and go to school.");
	thirdOption.hide();

	firstOption.mousePressed(Run);
	secondOption.mousePressed(ApologizeAndGoToSchool);
}

function Run(){
	marathon = createImg("marathon.jpg");
	marathon.style('width', '300px');
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	beats.hide();
	Late.hide();
	title.html(nameInput.value() + ', your marathon runner mom chased you down and brought you to your dad');
}


function ApologizeAndGoToSchool(){
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	beats.hide();


	 
	title.html(nameInput.value() + ', you teacher is not happy with your lateness, you are expelled.');
    Expelled = createImg("Expelled.png");
	Expelled.style('width', '600px');
}


function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight);
  
}