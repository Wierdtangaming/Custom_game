var canvas, backgroundImage,enemy,enemy_created;
var grnd_no;
var score;
var grnd1_f,grnd2_f,grnd3_f,grnd4_f;
var grnd1_2;
var grnd2;
var enemyflag;
var prev_grnd;
var ground1,ground2,ground3,Ground4;
var bullet1;
let jump_btn,shoot_btn;
var pbody1,wait_time,jump_flag;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload(){
}

function setup(){
  grnd_no = 0;
  score = 0;
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(displayWidth - 20, displayHeight-10);
  player = new Player(displayWidth/4,displayHeight-500,200,140);
  game = new Game();
  game.newGrnd();
  
}


function draw(){
  background("white");
  Engine.update(engine);

  player.display();
  ground1.display();
  displaygrounds();
  
  game.play();
  game.spawnenemy();
}




function displaygrounds() {
  if ( grnd2_f === true){
    ground2.display();
  }
  if ( grnd3_f === true){
    ground3.display();
  }
  if ( grnd4_f === true){
    //ground4.display();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.jump();
  }
}

function playershoot() {
  player.shoot();
}

function playerjump() {
  player.jump();
}

