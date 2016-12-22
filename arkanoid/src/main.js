var paddle;
var ball;
var bricks = [];
var brickCount = 40;
var brickWidth = 80;
var brickHeight = 40;

function setup() {
	createCanvas(800, 600)
	paddle = new Paddle();
	ball = new Ball();

	for(var i = 0; i < brickCount; i++) {
		bricks.push(new Brick((i%(width/brickWidth)) * brickWidth, floor(i / (width / brickWidth)) * brickHeight, brickWidth, brickHeight));
	}
}

function draw() {
	background(33, 66, 99);
	paddle.update();
	ball.update();
	ball.collide(paddle.pos.x, paddle.pos.y, paddle.w, paddle.h);

	for(var i = bricks.length-1; i >= 0; i--) {
		var collided = ball.collide(bricks[i].pos.x, bricks[i].pos.y, brickWidth, brickHeight);
		if(collided) {
			bricks.splice(i, 1);
			ball.increseSpeed()
		} else {
			bricks[i].update();
		}

	}
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		paddle.move(-2);
	}
	if (keyCode === RIGHT_ARROW) {
		paddle.move(2);
	}
}

function keyReleased() {
	paddle.move(0);
}