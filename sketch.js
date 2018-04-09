
var bird;
// var stars;
var pipes = [];
var quiz;
var screenColor = 0;
let equation;
var firstRandom = 0;
var secondRandom = 0;
var operatorRandom;
var ret = 0;
var deathState = false;
//shifted changes on even resultant
//if it swaps the states of the two pipes
var shifted = false;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	bird = new Bird();
	quiz = new Quiz();
	// stars = new Stars();
	pipes.push(new Pipe());


}

function draw() {

	if (deathState === false) {

  quiz.timer();



	//maybe creategraphics needs to be a square...




		if (key == ' ') {
			var jump = 1;
			// bird.applyForce(jump);
	}
	if (keyCode === UP_ARROW) {
			bird.up();
			console.log('up');
		}
	if (keyCode === DOWN_ARROW) {
			bird.down();
			console.log('down');

		}

		translate(-width/2, -height/2);
		background(screenColor);
		// this can work but it isnt important..
		// stars.farSpace();






	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}

	for (var i = pipes.length-1; i > 0; i--) {

		if (!pipes[i].hits(bird)) {
			bird.show();
			bird.update();
			pipes[i].show();
			pipes[i].update();

		} else {
			deathState = true;
			console.log('HITS');
		}

		if (pipes[i].offscreen()) {
			pipes.splice(i, 1);
		}

	}
	equation = createGraphics(250,250);
	equation.fill(200,0,200);
	equation.background(255, 0);
	equation.textAlign(CORNER);
	equation.textSize(35);

	if (ret % 2 == 0) {
		screenColor = 255;
		shifted = true;
	} else {
		screenColor = 150;
		shifted = false;
	}



	var quizText = firstRandom + operatorRandom + secondRandom + "=" + ret;
	// equation.text(quizText, 80, 80);

		fill(150, 100);
		rectMode(CENTER);
		//drawing the to the rect really slows everything down
		//replace all this with HTML
		// texture(equation);
		// rect(width/2, height/4, 400, 400);
		rectMode(CORNER);

 }
 else {background(0);
	bird.death();
}
console.log(shifted);
}
