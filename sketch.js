const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg;

function preload()
{
	boyImg = loadImage('boy.png');
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(470,250,25);
	mango2 = new Mango(560,200,25);
	mango3 = new Mango(700,250,25);
	mango4 = new Mango(600,150,25);
	mango5 = new Mango(700,150,25);
	mango6 = new Mango(630,250,25);

	stone = new Stone(190,420,20);

	ground = new Ground(600,600,1200,40);

	tree = new Tree(600,330,5,5);
	//100,500

	rope = new Rope(stone.body,{x:150,y:400});

	boy = new Boy(80,475,5,5);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(220);

  tree.display();

  boy.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  ground.display();

  stone.display();

  rope.display();

 // boy.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  }

  function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
	rope.fly();
	console.log("hi")
 }
 

 function detectCollision(lstone,lmango){
	 mangoBodyPosition = lmango.body.position
	 stoneBodyPosition = lstone.body.position

	 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
     if (distance<=lmango.r+lstone.r){
		 Matter.Body.setStatic(lmango.body,false)
	 }
	
	}

	function keyPressed(){
		if (keyCode === 32){
			Matter.Body.setPosition(stone.body,{x:190,y:500})
			rope.attach(stone.body);
		}
	}

 

