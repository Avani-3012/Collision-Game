var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(50,300);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  car.shapeColor = "green";
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "black";
  car.velocityX = speed;
}

function draw() {
  background ("pink");
  if(wall.x - car.x<(car.width +wall.width)/2){
  car . velocityX =0;
  var deformation =0.5 * weight * speed * speed/22509;
  if(deformation>180){
    car.shapeColor = color(250,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor = color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor = color(0,255,0);
  }
  } 
  drawSprites();
}