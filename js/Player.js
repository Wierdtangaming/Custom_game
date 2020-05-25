class Player {
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    pbody1 = this.body;
    this.width = width;
    this.height = height;
    this.image = loadImage("images/bike.png");
    World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    
    pop();
  }

  jump() {
    this.body.position.y -= 10;
    jump_flag = true;
  }

  shoot() {
    bullet1 = new bullet(displayWidth/4,displayHeight-500,100,100) 
    bullet1.shoot();
  }
 
}
