var jaxon, pathImg, path,left_boundary,right_boundary, jaxon_running, bomb,bombImg, energydrink,energyDrinkImg , subwayImg, coin, coinImg, coinscore,song,slider;
function preload(){
 
jaxon_running=loadAnimation("runner-1.png", "runner-2.png");
  pathImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
  bombImg=loadImage("bomb.png");
  energyDrinkImg = loadImage("energyDrink.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;



  jaxon=createSprite(390,300,80,600);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale= 0.05
 
 
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  coin.velocityY=5;
  coin.y=coin.height/30


  bomb= createSprite(200,200,)
bomb.addImage(bombImg)
bomb.scale= 0.1;
bomb.velocityY=5;
bomb.y=bomb.height/30;

energydrink= createSprite(100,200,80,90)
energydrink.addImage(energyDrinkImg);
energydrink.scale= 0.1
energydrink.velocityY=5;
energydrink.y=energydrink.height/30;

left_boundary = createSprite(0,300,100,600);
 left_boundary.visible = false;
 right_boundary = createSprite(390,300,80,600);
 right_boundary.visible = false;

}

function draw() {
  background(0);
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;
jaxon.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
 
  
}
 
  edges=createEdgeSprites();
  jaxon.collide(edges[3]);
  jaxon.collide(left_boundary);
  jaxon.collide(right_boundary);

drawSprites();
}

