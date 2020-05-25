class Game {
  constructor(){

  }


  play(){
    jump_btn = createButton('Jump');
    jump_btn.position(displayWidth-100,displayHeight-100);
    jump_btn.mousePressed(playerjump);


    shoot_btn = createButton('Shoot');
    shoot_btn.position(300,displayHeight-100)
    shoot_btn.mousePressed(playershoot);
    
    score++;
    
    if(score % 120 === 0){
      game.newGrnd();
    }
    if (jump_flag === true) {
      wait_time++;
      if(wait_time === 100){
        console.log(s)
        player.body.position.y += 10;
        wait_time = 0;  
        jump_flag = false;
      }
    }

    
    drawSprites();
  }

  end(){
   
  }


  newGrnd() {
    if (grnd_no === 0) {
     ground1 = new Ground1(displayWidth-500,displayHeight,displayWidth*2,200);
    }
    else if (grnd_no > 0){
      var grnd_random = round(random(1,3));
     
      switch (grnd_random) {
        case 1:
          if (prev_grnd !== "c1"){
          ground2 = new Ground2(displayWidth,displayHeight,displayWidth*2,200);
          grnd2_f = true
          }
          else{
            ground3 = new Ground3(displayWidth ,displayHeight,displayWidth*2,200);
            grnd3_f = true
          }
          prev_grnd = "c1"
          break;
    
        case 2:
          if (prev_grnd !== "c2"){
           ground3 = new Ground3(displayWidth ,displayHeight,displayWidth*2,200);
           grnd3_f = true
          }
          else {
            ground2 = new Ground2(displayWidth,displayHeight,displayWidth*2,200);
            grnd2_f = true
          }
           prev_grnd = "c2"
          break;
        
        case 3:
          if (prev_grnd !== "c3"){
          Ground4 = new Ground1(displayWidth ,displayHeight,displayWidth*2,200);
          grnd4_f = true;
          }
          else {
            ground3 = new Ground3(displayWidth ,displayHeight,displayWidth*2,200);
            grnd3_f = true
          }
          prev_grnd = "c3"
        default :
           break;
      } 
      
    }
    grnd_no++; 
  }

  spawnenemy() {
    if (score % 100 === 0){
        var randomenemy_y = random(0,displayHeight/2-150)
        enemy = new Enemy(displayWidth,randomenemy_y,100,100);
        enemyflag = 0;
        enemy_created = true;
    }
    if(enemy_created === true){
    enemy.display();
    }
  }
}
