const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var leftBody, rightBody, bottomBody, leftSprite, rightSprite,bottomSprite;
var dustbingreenIMG;
function preload(){
    dustbingreenIMG=loadImage("dustbingreen.png")
}
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    
   // bottomBody = Bodies.rectangle(width/2, 765, 200, 20,{isStatic:true});
    //World.add(world, bottomBody);
    //bottomSprite=createSprite(width/2, 765, 200,20);
   // bottomSprite.addImage(dustbingreenIMG);
   // bottomSprite.scale=0.8;
    //bottomSprite.shapeColor="red";

    leftBody = Bodies.rectangle(710,715,25,100);
    World.add(world, leftBody);
    leftSprite=createSprite(650, 710, 25,100);
    leftSprite.addImage(dustbingreenIMG);
    leftSprite.scale=0.6;
    leftSprite.shapeColor="red";

   // rightBody = Bodies.rectangle(510,725,25,100);
    //World.add(world, rightBody);
    //rightSprite=createSprite(510,725,25,100);
   // rightSprite.addImage(dustbingreenIMG);
    //rightSprite.scale=0.8;
    //rightSprite.shapeColor="red";  
   

   ground = new Ground(400,800,800,50);
   //dustbin = new Dustbin(x,y,width,height);

   paper = new Paper(300,725,50);
    

   
    
   
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,isStatic,{x:50,y:-50});
    }
  }
function draw(){
    background(10);
    Engine.update(engine);
    rectMode(CENTER);
    drawSprites();
     ground.display()  
     paper.display();
    // dustbin.display();  
}


