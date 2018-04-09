
var bird;
var pipes = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	bird = new Bird();
	pipes.push(new Pipe());

}

function draw() {
	background(0);
	bird.show();
	bird.update();

	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}

	for (var i = pipes.length-1; i > 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].hits(bird)) {
			console.log('HITS');
		}

		if (pipes[i].offscreen()) {
			pipes.splice(i, 1);
		}

	}

}


function keyPressed() {
	if (key == ' ') {
		console.log("SPACE");
		bird.up();
	}
}
