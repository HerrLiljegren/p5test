var Ball = function () {
	this.speed = 2;
	this.r = 20;
	this.pos = createVector(width / 2, height / 2);
	this.vel = createVector(-this.speed, -this.speed);
	this.alive = true;
	this.speedFactor = 1.01;

}

Ball.prototype.update = function () {
	if (!this.alive) { return; }

	if (this.pos.x <= 0 || this.pos.x >= width) { this.vel.x = -this.vel.x; }
	if (this.pos.y <= 0) { this.vel.y = -this.vel.y; }
	if (this.pos.y >= height + this.r) { this.alive = false; }

	this.pos.x += this.vel.x * this.speed;
	this.pos.y += this.vel.y * this.speed;

	fill(0, 175, 175);
	ellipse(this.pos.x, this.pos.y, this.r);
}

Ball.prototype.collide = function (x, y, w, h) {

	if (rectCircleColliding(this.pos.x, this.pos.y, this.r, x, y, w, h)) {
		this.vel.y = -this.vel.y;
		return true;
	}

	return false;
}

Ball.prototype.increseSpeed = function () {
	this.speed *= this.speedFactor;
	console.log("speed", this.speed);
}

function pointInRect(px, py, x, y, w, h) {
	if ((px > x && px < x + w) &&
		(py > y && py > y + h)) {
		return true;
	}
	return false;
}

// return true if the rectangle and circle are colliding
function rectCircleColliding(cx, cy, cr, rx, ry, rw, rh) {
	var distX = Math.abs(cx - rx - rw / 2);
	var distY = Math.abs(cy - ry - rh / 2);

	if (distX > (rw / 2 + cr)) { return false; }
	if (distY > (rh / 2 + cr)) { return false; }

	if (distX <= (rw / 2)) { return true; }
	if (distY <= (rh / 2)) { return true; }

	var dx = distX - rw / 2;
	var dy = distY - rh / 2;
	return (dx * dx + dy * dy <= (cr * cr));
}

