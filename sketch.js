var sun;
var planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8;
function setup() {
  createCanvas(800,800);
  sun = createSprite(400, 200, 50, 50);
  sun.shapeColor = "yellow";

  planet1 = createSprite(200,250,20,20);
  planet1.shapeColor = "maroon";
  planet1.setCollider("circle",0,0,10);
  planet1.debug = true;

  planet2 = createSprite(250,330,26,26);
  planet2.shapeColor = "blue";
  planet2.setCollider("circle",0,0,12);
  planet2.debug = true;

  planet3 = createSprite(470,200,15,15);
  planet3.shapeColor = "brown";
  planet3.setCollider("circle",0,0,8);
  planet3.debug = true;

  planet4 = createSprite(115,320,40,40);
  planet4.shapeColor = "green";
  planet4.setCollider("circle",0,0,20);
  planet4.debug = true;

  planet5 = createSprite(400, 50, 45, 45);
  planet5.shapeColor = "cyan";
  planet5.setCollider("circle",0,0,23);
  planet5.debug = true;

  planet6 = createSprite(650,200,25,25);
  planet6.shapeColor = "red";
  planet6.setCollider("circle",0,0,12);
  planet6.debug = true;

  planet7 = createSprite(400, 350, 45, 45);
  planet7.shapeColor = "blue";
  planet7.setCollider("circle",0,0,23);
  planet7.debug = true;

  planet8 = createSprite(250, 70 , 30, 30);
  planet8.shapeColor = "grey";
  planet8.setCollider("circle",0,0,15);
  planet8.debug = true;
}

function draw() {
  background(255,255,255);  
  if(frameCount%2===0){
    sun.width = sun.width + 1;
    sun.height = sun.height + 1;
  }
  if(ISTOUCHING1()){
    planet1.destroy();
  }
  if(ISTOUCHING2()){
    planet2.destroy();
  }
  if(ISTOUCHING3()){
    planet3.destroy();
  }
  if(ISTOUCHING4()){
    planet4.destroy();
    sun.destroy();
  }
  if(ISTOUCHING5()){
    planet5.destroy();
  }
  if(ISTOUCHING6()){
    planet6.destroy();
  }
  if(ISTOUCHING7()){
    planet7.destroy();
  }
  if(ISTOUCHING8()){
    planet8.destroy();
  }
 
  drawSprites();
}
function ISTOUCHING1(){
  if (sun.isTouching(planet1)){
    return true;
  }
}
function ISTOUCHING2(){
  if (sun.isTouching(planet2)){
    return true;
  }
}
function ISTOUCHING3(){
  if (sun.isTouching(planet3)){
    return true;
  }
}
function ISTOUCHING4(){
  if (sun.isTouching(planet4)){
    return true;
  }
}
function ISTOUCHING5(){
  if (sun.isTouching(planet5)){
    return true;
  }
}
function ISTOUCHING6(){
  if (sun.isTouching(planet6)){
    return true;
  }
}
function ISTOUCHING7(){
  if (sun.isTouching(planet7)){
    return true;
  }
}
function ISTOUCHING8(){
  if (sun.isTouching(planet8)){
    return true;
  }
}

