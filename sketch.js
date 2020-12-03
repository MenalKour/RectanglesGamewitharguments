var fixed,moving,gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,1000);
  fixed=createSprite(200,200,100,50);
  fixed.shapeColor="green"
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="green";
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="green";
 // moving.velocityY=-4;
  fixed.velocityY=1;
}

function draw() {
  background("black"); 
  bounceOff(moving,fixed);
  console.log(moving.x-fixed.x)
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  

   if(isTouching(gameObject2,moving)){
    gameObject2.shapeColor="red";
    moving.shapeColor="red";
   }
   else{
    moving.shapeColor="green";
    gameObject2.shapeColor="green";
   }
   
  drawSprites();
}
