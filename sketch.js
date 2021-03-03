
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	DustBin = loadImage("DustbinGreen.png");
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	fill(255);
	ground = Bodies.rectangle(width/2, 495, width, 10, {isStatic:true});
	World.add(world, ground);

	side1 = new DUSTBIN(1030, 448, 15, 100);
	side2 = new DUSTBIN(1130, 448, 15, 100);
	side3 = new DUSTBIN(1080, 480, 100, 15);
	
	paper = new Paper(200, 100, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  background(100);
  
  paper.display();

  side1.display();
  side2.display();
  side3.display();
  image(DustBin, 1000, 350, 150, 150);
   
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position, {x:19, y:-20});
	}
}