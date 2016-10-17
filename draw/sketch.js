var strokeColor = 'red';

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// background(220);
	if (mouseIsPressed) {
		stroke(strokeColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

function keyTyped() {
	if (key === 'b'){
		strokeColor = 'black';
} else if (key === 'p') {
	strokeColor = '#228B22';
	weight = 10;
}
}