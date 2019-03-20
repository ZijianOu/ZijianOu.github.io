
var canvas;

var userName;
var title;

var firstOption;
var secondOption;
var thirdOption;
var forthOption;
 

var greeting;
var nameInput;

var runman;
var runmanSlider;
var runmanSpeed = 2;

var runmanX = 0;
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
	runmanSlider.hide();

	
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
	guinness.style('width', '200px');
	firstOption.hide();
	secondOption.hide();
	tricycle.hide();

}
function walkToBusStation(){
    runman = createImg("runman.gif");



	

	bus = createImg("bus.png");
	bus.style('width', '200px');
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	Late.hide();

	userName.hide();
 

	title.html("You made it to school on time and started another boring day.");
	runmanAnim();

}
		  function runmanAnim(){
		  	runman.position(runmanX, 90);
			//runmanSlider = createSlider(0,255,0);
			runmanScale = runmanSlider.value();
			
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
	title.html(nameInput.value() + ', your marathon runner mom chased you down and brought you to your dad! Didnt see that coming did you?');
}


function ApologizeAndGoToSchool(){
	forthOption = createA("#", ">>Question");
	createElement
	forthOption.html(">>Question");
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	beats.hide();
	forthOption.mousePressed(Question);
	 
	title.html(nameInput.value() + ', you teacher is not happy with your lateness, you are asked to answer a question.');
    //Expelled = createImg("Expelled.png");
	//Expelled.style('width', '600px');
}

function Question(){
	title.html("Which bear is missing ear?");
	firstOption = createA("#", ">>A");
	secondOption = createA("#", ">>B");
	thirdOption = createA("#", ">>C");
	firstOption.html(">>A");
	secondOption.html(">>B");
	thirdOption.html(">>C");
	forthOption.hide();
	firstOption.mousePressed(Wrong);
	secondOption.mousePressed(Right);
	thirdOption.mousePressed(Wrong);

	bear1 = createImg("bear1.jpg");
	bear2 = createImg("bear2.jpg");
	bear3 = createImg("bear3.jpg");
	bear1.style('width', '200px');
	bear2.style('width', '200px');
	bear3.style('width', '200px');

}
function Wrong(){
	title.html("You are wrong!");
}
function Right(){
	title.html("You are right! Bear without ear is B! Your teacher is impreesed by your talent!");
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	bear1.hide();
	bear2.hide();
	bear3.hide();
}
function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight);
  
}