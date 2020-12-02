var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

 car= createSprite(50, 200, 50, 50);

 car.shapeColor=rgb(255,51,82);
 
 wall= createSprite(1500,200,600,height/2);

 wall.shapeColor=("brown");

 speed=random(55,90);

 weight=random(400,1500);
 
 car.velocityX=speed; 

 deformation=0.5*weight*speed*speed/22500;
 
}

function draw() {

  background(0,0,0); 

  if (car.isTouching(wall) ){
  if(wall.x-car.x<(car.width+wall.width)){

car.velocityX=0;

var deformation=0.5 * weight *speed * speed/22509;

if(deformation>180){

car.shapeColor=color(255,0,0);


}

if(deformation<180 && deformation>100){

car.shapeColor=color(230,230,0);


}

if(deformation<100){

car.shapeColor=color(0,255,0);



}
  }
}
  drawSprites();
}
