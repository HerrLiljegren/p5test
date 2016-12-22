var Paddle = function () {
	this.w = 100;
	this.h = 10;
	this.r = 5;
	this.pos = createVector(width / 2, height - 50);
	this.vel = createVector();
	this.maxSpeed = 10;
}


Paddle.prototype.update = function () {


		this.pos.add(this.vel);
	this.pos.x = constrain(this.pos.x, 0, width-this.w);


	fill(255);

	rect(this.pos.x, this.pos.y, this.w, this.h, this.r);
}

Paddle.prototype.move = function(dir) {
	this.vel.x = dir*5;
}

Paddle.prototype.stop = function () {
	this.vel.x = 0;
}