var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,Left,Right,Bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 300, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Left = createSprite(300,groundSprite.y-40,20,100);
	Left.shapeColor = "red"
	right = createSprite(Left.x+200,Left.y,20,100);
	right.shapeColor = "red"
	bottom = createSprite(Left.x+100,Left.y+40,200,20);
	bottom.shapeColor = "red"
	engine = Engine.create();
	world = engine.world;
keyPressed();
Left = Bodies.rectangle({isStatic:true});
	World.add(world, Left);
	right = Bodies.rectangle({isStatic:true});
	World.add(world, right);
	bottom = Bodies.rectangle({isStatic:true});
	World.add(world, bottom);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 640, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);   
  }
}



