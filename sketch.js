var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 100);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(300,200,100,50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background(123,44,67);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  console.log(fixedRect.x-movingRect.x)

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2  &&
     movingRect.y-fixedRect.y < movingRect. height/2+ fixedRect.height/2 &&
     fixedRect.y - movingRect.y  <movingRect. height/2+ fixedRect.height/2 )
  {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";

  }
  drawSprites();
}