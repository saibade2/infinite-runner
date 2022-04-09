var balloon, balloonImg;
var trap,trapImg,trapsGroup;
var gameState="PLAY";
var bgImage,bg

function preload(){
balloonImg= loadImage("balloon.png");
trapImg = loadImage("bird.jpg");
bgImage = loadImage("sky.jpg")
}

function setup() {
createCanvas(700,700);

balloon= createSprite(300,300,150,150);
balloon.addImage("balloon", balloonImg);
balloon.scale=0.6;

bg = createSprite(500,500)
bg.addImage("bg",bgImage)
bg.velocityY=1;
balloon.depth = bg.depth;
 balloon.depth +=1;


trapsGroup= new Group();
}

function draw() {
background("white");

if (gameState === "PLAY") {
  if(keyDown("left_arrow")){
    balloon.x = balloon.x - 3;
  }
  
  if(keyDown("right_arrow")){
    balloon.x = balloon.x + 3;
  }
  
  if(keyDown("space")){
    balloon.velocityY = -10;
  }
  
 balloon.velocityY = balloon.velocityY + 0.8

if(trapsGroup.isTouching(balloon) || balloon.y > 600){
    balloon.destroy();
    gameState="END";
}

if(bg.y > 400){
  bg.y = 300
}
  spawntrap();
  drawSprites();

}


 if (gameState === "END"){
  stroke("red");
  fill("red");
  textSize(30);
  text("Game Over", 230,250);
  }
 
}

 function spawntrap(){

if (frameCount % 240 === 0) {
 var trap = createSprite(200, -50);

 trap.x = Math.round(random(120,400));
 trap.velocityY = 1;
 trap.addImage("trap",trapImg);
 trap.scale=0.2;

 balloon.depth = trap.depth;
 balloon.depth +=1;
 
 trap.lifetime = 800;

 trapsGroup.add(trap);
}
 }