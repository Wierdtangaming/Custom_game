class Ground1 {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            density: 3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/grnd1_plain.png");
        World.add(world, this.body);
      }
      display(){
        Matter.Sleeping.set(this.body,false)
        this.body.position.x -= 10
        Matter.Sleeping.set(this.body,true);
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, displayWidth*2, 200);
        if(pos.x > displayWidth*2){
          World.remove(world, this.body);
        }
      }
}
