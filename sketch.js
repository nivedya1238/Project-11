var path, movingBackward, edges;
var human, moving_rightleft;
var invisibleWall1, invisibleWall2;

function preload(){
  //pre-load images
  moving_rightleft = loadAnimation("Runner-1.png", "Runner-2.png");
  movingBackward = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create path sprite here

  path = createSprite(200, 200, 400, 400);
  path.velocityY = 2
  path.y = path.height / 2
  path.addImage(movingBackward)
  path.scale = 1.2

  //create invisible wall
  invisibleWall1 = createSprite(10, 200, 30, 400)
  invisibleWall2 = createSprite(390, 200, 30, 400)
  invisibleWall1.visible = false;
  invisibleWall2.visible = false;
  //create human sprite here

  human = createSprite(300, 300, 40, 40);
  human.addAnimation("moving", moving_rightleft)
  human.scale = 0.1

  //create edges
  edges = createEdgeSprites();
  human.bounceOff(invisibleWall1)
  human.bounceOff(invisibleWall2)
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = path.height / 2
    path.velocityY = 2
  }
  human.x = World.mouseX
  console.log(human.x)
  drawSprites();
}
