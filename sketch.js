
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, ball, ground, rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,
box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var hero, monster;

var backIMG;


function preload() {
	backIMG = loadImage("images/GamingBackground.png");
}

function setup() {
	createCanvas(3000, 800);
	engine = Engine.create();
	world = engine.world;

	box1 = new Box(600,50,40,40);
	box2 = new Box(600,90,40,40);
	box3 = new Box(600,130,40,40);
	box4 = new Box(600,170,40,40);
	box5 = new Box(600,210,40,40);
	box6 = new Box(600,250,40,40);

	box7 = new Box(750,50,40,40);
	box8 = new Box(750,90,40,40);
	box9 = new Box(750,130,40,40);
	box10 = new Box(750,170,40,40);
	box11 = new Box(750,210,40,40);
	box12 = new Box(750,250,40,40);

	box13 = new Box(900,50,40,40);
	box14 = new Box(900,90,40,40);
	box15 = new Box(900,130,40,40);
	box16 = new Box(900,170,40,40);
	box17 = new Box(900,210,40,40);
	box18 = new Box(900,250,40,40);
	box19 = new Box(900,290,40,40);
  box20 = new Box(900,330,40,40);
  
  ground = new Ground(1500, 800, 3000, 50);
  hero = new Hero(400,700,200);
  monster = new Monster(1100,200,200, 350)

	rope = new Rope(hero.body, {x:200, y:500});
}


function draw() {
  background(backIMG);
  Engine.update(engine)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box4.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box14.display();
  box18.display();
  box19.display();
  box20.display();
 
  hero.display();
  monster.display();
  rope.display();

  ground.display();
}


function mouseDragged() {
	Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}



