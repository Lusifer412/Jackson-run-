var jackson, jackson_running, jacksonImg;
var path, pathImg ;

function preload(){
  jackson_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;


  jackson = createSprite(200, 300, 20 , 20);
  jackson.addAnimation("running", jackson_running);
  jackson.scale=0.1;
  
  
}

function draw() {
  background(0);
drawSprites();
if(path.y > 400){
  path.y = height/2;

}
jackson.x= World.mouseX
}