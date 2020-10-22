const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var physicsengine, world, ground,ball
function setup() {
  createCanvas(600,600);
physicsengine = Engine.create();
world = physicsengine.world
ground = Bodies.rectangle(200,500,400,20, {isStatic: true});
World.add(world,ground)
ball = Bodies.circle(210,20,20,{restitution: 2})
World.add(world,ball)

console.log(ground)


  
}

function draw() {
  background(255,255,255);
 Engine.update(physicsengine)
rect(ground.position.x,ground.position.y,400,20)
circle(ball.position.x,ball.position.y,20)

 
}