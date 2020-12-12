const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;
var gameState = "onSling";

function setup() {
    var canvas = createCanvas(1600, 620);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400, 400, 50, 50);
    box2 = new Box(450, 490, 50, 50);
    box3 = new Box(500, 490, 50, 50);
    box4 = new Box(550, 490, 50, 50);
    box5 = new Box(600, 490, 50, 50);
    box6 = new Box(500, 400, 50, 50);
    box7 = new Box(550, 400, 50, 50);
    box8 = new Box(450, 400, 50, 50);
    box9 = new Box(500, 400, 50, 50);
    box10 = new Box(1200, 200, 50, 50)
    box11 = new Box(1150, 200, 50, 50)
    box12 = new Box(1100, 200, 50, 50)
    box13 = new Box(1250, 200, 50, 50)
    box14=new Box(1300,200,50,50)
    box15=new Box(1250,200,50,50)
    box16=new Box(1150,200,50,50)
    box17=new Box(1200,200,50,50)
    box18=new Box(1200,100,50,50)



    ground1 = new Ground(1200, 490, 300, 20)
    ground2 = new Ground(500, 590, 300, 20)
    bird = new Bird(100, 100, 40, 40);

    chain = new Chain(bird.body, { x: 200, y: 200 });


}

function draw() {
    background(59,45,45);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();    
    box17.display();
    box18.display();

    bird.display();
    chain.display();



    ground1.display();
    ground2.display();
}

function mouseDragged() {
    if (gameState !== "launched") {
        Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
    }
}


function mouseReleased() {
    chain.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        chain.attach(bird.body);
    }

}