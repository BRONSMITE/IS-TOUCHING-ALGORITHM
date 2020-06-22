var magic1,magic2

function setup(){

  createCanvas(800,800);
 magic1=createSprite(400, 200, 50, 50);
magic2=createSprite(200,400,50,50);
magic2.shapeColor=("orange")
magic1.shapeColor=("orange")
}

function draw() {
  background(255,255,255);  
  magic2.x=World.mouseX
  magic2.y=World.mouseY

  if(magic2.x-magic1.x <magic1.width/2+magic2.width/2 && 
    magic1.x-magic2.x<magic1.width/2+magic2.width/2 && magic1.y-magic2.y<magic1.height/2+magic2.height/2&& magic2.y-magic1.y<magic1.height/2+magic2.height/2){
    magic1.shapeColor=("blue")
    magic2.shapeColor=("blue")
    }
    else {
      magic1.shapeColor=("orange");
      magic2.shapeColor=("orange");
    }
      drawSprites();
  
}
