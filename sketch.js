
var backgroundImg;

var bg = "snow1.jpg";
 
var boy,boyImg,boyImg2;

var snow1;

function preload(){

backgroundImg = loadImage(bg);
boyImg = loadImage("boy.jpg");
boyImg2 = loadImage("boy_jump.jpg");

}


function setup() {
  createCanvas(1000,600);
  background(backgroundImg)

    
    boy = createSprite(300,500);
    boy.addImage(boyImg);
    boy.scale = 0.3;

    snow1 = new snow(200,10,10)

}

function draw() {
  background(backgroundImg); 
  
  snow1.display()
   drawSprites();
  
}

function keyPressed(){

if(keyCode === "SPACE"){
boy.addImage(boyImg2);
}

}



