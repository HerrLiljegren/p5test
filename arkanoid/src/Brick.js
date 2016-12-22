var Brick = function (x, y, w, h) {
	this.pos = createVector(x, y, w, h);
	this.w = w;
	this.h = h;
}

Brick.prototype.update = function () {
	fill(255, 175, 175);
	rect(this.pos.x, this.pos.y, this.w, this.h);
}