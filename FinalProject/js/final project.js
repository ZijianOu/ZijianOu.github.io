
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


}

function beginning(){
	background(100);
	

	greeting = createP("Please type your name and press 'Enter'");
	nameInput = createInput();


	nameInput.changed(startStory);
	//secondOption.hide();
	//firstOption.hide();

	
}



function startStory(){
	
	greeting.hide();
	nameInput.hide();
	
	userName = createElement('h1', nameInput.value());

	title = createElement('h1', 'Ready for games?');

	
	firstOption = createA("#", ">>Yes!");
	createElement('br');
	secondOption = createA("#", ">>No..");
	createElement('br');
	//thirdOption = createA("#", ">>Take your little sister's tricycle")
	//createElement('br');

	
	firstOption.mousePressed(Games);
	secondOption.mousePressed(beginning);
	//thirdOption.mousePressed(TakeSistersBike);


}

function Games(){
    Game = createImg("Game.gif");
    Game.style('width', '200px');
    firstOption.hide();
    secondOption.hide();
    title.html(nameInput.value() + ", " + " " + "pick one you want!");
	createElement('br');
    createElement('br');
    //firstOption = createA("ponggame.html", ">>Pong game");
     firstOption = createA("#", ">>Pong game");
	createElement('br');
    createElement('br');
	//secondOption = createA("snakegame.html", ">>Snake game");
	secondOption = createA("#", ">>Snake game");
	createElement('br');
	createElement('br');
	thirdOption = createA("#", ">>???");
	createElement('br');
	createElement('br');
	forthOption = createA("#", ">>Maz");

	firstOption.mousePressed(ponggame);
	secondOption.mousePressed(snakegame);
	thirdOption.mousePressed(Question);
	forthOption.mousePressed(Maz);

	userName.hide();
	}
function ponggame(){
	title.hide();
	Game.hide();
	firstOption.hide();
    secondOption.hide();
    thirdOption.hide();
    forthOption.hide();
	title = createElement('h1', 'Difficulty level >1<,' + ' ' + nameInput.value() + ', '+ 'are you sure?');
	firstOption = createA("ponggame.html", "Yes! Bring it on!");
	createElement('br');
    createElement('br');
	createElement('br');
	secondOption = createA("#", "Maybe not.");
	//firstOption.mousePressed(ponggame.html);
	secondOption.mousePressed(Games);
}
function snakegame(){
	title.hide();
	Game.hide();
	firstOption.hide();
    secondOption.hide();
    thirdOption.hide();
    forthOption.hide();
	title = createElement('h1', 'Difficulty level >2<,' + ' ' + nameInput.value() + ', '+ 'are you sure?');
	firstOption = createA("snakegame.html", "Yes! Bring it on!");
	createElement('br');
    createElement('br');
	createElement('br');
	secondOption = createA("#", "Maybe not.");
	//firstOption.mousePressed(snakegame.html);
	secondOption.mousePressed(Games);
}
function Question(){
	//title.hide();
	Game.hide();
	firstOption.hide();
    secondOption.hide();
    thirdOption.hide();
    forthOption.hide();
    //background(666);
	title.html("Which bear is missing ear?");
	firstOption = createA("#", ">A<");
	secondOption = createA("#", ">B<");
	thirdOption = createA("#", ">C<");
	firstOption.html(">>A");
	secondOption.html(">>B");
	thirdOption.html(">>C");
	//forthOption.hide();
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
function Maz(){
	title.hide();
	Game.hide();
	firstOption.hide();
    secondOption.hide();
    thirdOption.hide();
    forthOption.hide();
	title = createElement('h1', 'Difficulty level >5<,' + ' ' + nameInput.value() + ', '+ 'are you sure?');
	firstOption = createA("mazindex.html", "Yes! Bring it on!");
	createElement('br');
    createElement('br');
	createElement('br');
	secondOption = createA("#", "Maybe not.");
	//firstOption.mousePressed(snakegame.html);
	secondOption.mousePressed(Games);
}
function Wrong(){
	title.html("You are wrong!");
	//firstOption = createA("#", ">Click here to choose again.");
	//firstOption.mousePressed(Question);
}
function Right(){
	title.html("You are right! Bear without ear is B!");
	firstOption.hide();
	firstOption = createA("#", ">>HOME");
	firstOption.mousePressed(Games);
	secondOption.hide();
	thirdOption.hide();
	bear1.hide();
	bear2.hide();
	bear3.hide();
}
function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight);
  
}