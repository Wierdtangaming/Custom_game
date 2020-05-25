class Enemy {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/enemy.png");
        World.add(world, this.body);
      }
      display(){
        Matter.Sleeping.set(this.body,false)
        this.body.position.x -= 20
        Matter.Sleeping.set(this.body,true);
        var pos =this.body.position;
 
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, this.width, this.height);
      }
}
