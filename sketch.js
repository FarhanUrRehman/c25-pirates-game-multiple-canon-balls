const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
//to create an empty array 

var ball = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  cannon = new Cannon(180, 110, 130, 100, angle);
 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  
  for (i=0;i<ball.length;i++) {

    displayCannonBalls(ball[i])
  }

}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    ball [ball.length-1].shoot();
  }
}
//if we press down arrow new cannon ball is created and added tp array ball

function keyPressed () {

  if (keyCode === DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    ball.push(cannonBall)

  }

}

function displayCannonBalls(ball_1) {

 if (ball_1) {
  
  ball_1.display()
  
 }

}

