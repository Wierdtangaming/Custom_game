class bullet {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/gun.png");
        World.add(world, this.body);
      }
    
    shoot() {
      var force = 10;
      var mouseposition = [mouseX,mouseY]
      console.log(enemy.position)
      var deltaVector = Matter.Vector.sub(enemy.position, this.body.position);
      var normalizedDelta = Matter.Vector.normalise(deltaVector);
      var forceVector = Matter.Vector.mult(normalizedDelta, force);
      Matter.bullet1.applyForce(bullet1.body, bullet1.position, forceVector);
      console.log("shoot")
    }

    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}

