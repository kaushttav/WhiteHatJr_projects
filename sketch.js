const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground;
var boxsideleft;
var boxsideright;
var box1;
var box2;
var box3;
var box4;
var box5;
function setup() {
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic: true
  }
  var boxsideleft_options = {
    isStatic: true
  }
  var boxsideright_options = {
    isStatic: true
  }
  var box1_options = {
    isStatic: true
  }
  var box2_options = {
    isStatic: true
  }
   var box3_options = {
    isStatic: true
  }
  var box4_options = {
    isStatic: true
   }
   var box5_options = {
    isStatic: true
   }
  ground = Bodies.rectangle(200,390,200,10,ground_options);
  boxsideleft = Bodies.rectangle(80,235,20,300,boxsideleft_options);
  boxsideright = Bodies.rectangle(310,235,20,300,boxsideright_options);
  box1 = Bodies.rectangle(110,275,40,220,box1_options);
  box2 = Bodies.rectangle(150,295,40,180,box2_options);
  box3 = Bodies.rectangle(195,305,50,160,box3_options);
  box4 = Bodies.rectangle(240,295,40,180,box4_options);
  box5 = Bodies.rectangle(280,275,40,220,box5_options);
  
  World.add(world,ground);
  World.add(world,boxsideleft);
  World.add(world,boxsideright);
  World.add(world,box1);
  World.add(world,box2);
  World.add(world,box3);
  World.add(world,box4);
  World.add(world,box5);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,10);
  fill("blue");
  triangle(90, 165, 110, 145, 130, 165);
  fill("blue");
  triangle(170, 225, 195, 150, 220, 225);
  fill("blue");
  triangle(260,165,280,145,300,165);
  fill("white");
  rect(boxsideleft.position.x,boxsideleft.position.y,20,300);
  rect(boxsideright.position.x,boxsideright.position.y,20,300);
  rect(box1.position.x,box1.position.y,40,220);
  rect(box2.position.x,box2.position.y,40,180);
  rect(box3.position.x,box3.position.y,50,160);
  rect(box4.position.x,box4.position.y,40,180);
  rect(box5.position.x,box5.position.y,40,220);
}
