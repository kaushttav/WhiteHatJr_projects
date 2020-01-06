


movingrect;
function setup() {
  createCanvas(1200,400);

  
}

function draw() {
  background("white");  



if(mouseX>=0 && mouseX<=400){
  background("orange");
}
else if (mouseX>=400 && mouseX<=800){
  background("green");
}
else if (mouseX>=800 && mouseX<=1200){
  background("blue");
}

  drawSprites();
  ellipse(mouseX,mouseY,30,30);
}