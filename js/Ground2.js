class Ground2 {
  constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          density: 3
      }
      this.body1 = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/grnd2_lava.png");
      World.add(world, this.body1);
    }
    display(){
      Matter.Sleeping.set(this.body1,false)
      this.body1.position.x -= 10
      Matter.Sleeping.set(this.body1,true)
      var pos =this.body1.position;
      imageMode(CENTER);
      image(this.image, pos.x,pos.y, displayWidth*2, 200);
      if(pos.x > displayWidth*2){
        World.remove(world, this.body);
      }
    }
}