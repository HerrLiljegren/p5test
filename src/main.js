var axiom = "F";
var sentence = axiom;
var len = 100;
var angle;

var rules = [
	{ input: "F", output: "FF+[+F-F-F]-[-F+F+F]" }

]


function turtle() {
	resetMatrix();
	background(51);
	translate(width / 2, height);
	stroke(255);
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);

		if (current == "F") {
			line(0, 0, 0, -len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(angle);
		} else if (current == "-") {
			rotate(-angle)
		} else if (current == "[") {
			push();
		} else if (current == "]") {
			pop();
		}
	}
}

function setup() {
	createCanvas(400, 400);
	background(51);
	angle = radians(25);;


	turtle();
}

function draw() {
	// var offset = 0;
	// var w = width / 10;
	// for (var i = 0; i < sentence.length; i++) {
	// 	var c = sentence[i];


	// 	if (c === "A") {
	// 		rect(i % w * 10, floor(i / w)*10, 10, 10);
	// 	}

	// 	if (c === "B") {
	// 		ellipse((i % w * 10) + 5, (floor(i / w) *10) + 5, 5, 5);
	// 	}
	// }
}


function mousePressed() {
	len *= 0.5;
	var newSentence = "";
	for (var i = 0; i < sentence.length; i++) {
		var c = sentence[i];

		if (c === rules[0].input) { newSentence += rules[0].output; }
		else { newSentence += c; }
	}
	sentence = newSentence;
	console.log(sentence);

	turtle();
}