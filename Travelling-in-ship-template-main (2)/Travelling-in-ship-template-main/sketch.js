var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg1 = loadImage("ship-1.png");
  shipImg2 = loadImage("ship-2.png");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship1 = createSprite(130,200,30,30);
  ship1.addAnimation("movingShip",shipImg1);
  ship1.scale =0.25;
  ship2 = createSprite(360,200,30,30);
  ship2.addAnimation("movingShip",shipImg1);
  ship2.scale =0.25;
  
}

function draw() {
  background(0);
  
  
  sea.velocityX = -3;

  

  
    
  drawSprites();
}
