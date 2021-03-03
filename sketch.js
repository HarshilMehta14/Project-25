
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	fill(255);
	ground = Bodies.rectangle(width/2, 495, width, 10, {isStatic:true});
	World.add(world, ground);

	side1 = new DUSTBIN(980, 448, 15, 100);
	side2 = new DUSTBIN(1178, 448, 15, 100);
	side3 = new DUSTBIN(1080, 492, 200, 15);
	
	paper = new Paper(200, 100, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  background(200);
  
  side1.display();
  side2.display();
  side3.display();

  paper.display();
  //drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position, {x:20, y:-20});
	}
}