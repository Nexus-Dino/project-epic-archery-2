class PlayerArrow {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true,
      density: 1.0,
      friction: 1.0,
      restitution: 1.0,
    };
    this.width = width;
    this.height = height;
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("assets/arrow.png");
  }

  shoot(archerAngle) {
    var velocity = p5.Vector.fromAngle(archerAngle - 11);

    velocity.mult(20);
    print(velocity.x);
    print(velocity.y);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
