const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine , world;

function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world;

ground1=new Ground(600,400,1200,20)
ground2=new Ground(400,300,200,10)
ground3=new Ground(600,170,200,10)

block1=new Block(320,275,30,40)
block2=new Block(350,275,30,40)
block3=new Block(380,275,30,40)
block4=new Block(410,275,30,40)
block5=new Block(440,275,30,40)
block6=new Block(470,275,30,40)

block7=new Block(350,235,30,40)
block8=new Block(380,235,30,40)
block9=new Block(410,235,30,40)
block10=new Block(440,235,30,40)

block11=new Block(380,195,30,40)
block12=new Block(410,195,30,40)

block13=new Block(395,155,30,40)

block14=new Block(520,145,30,40)
block15=new Block(550,145,30,40)
block16=new Block(580,145,30,40)
block17=new Block(610,145,30,40)
block18=new Block(640,145,30,40)
block19=new Block(670,145,30,40)

block20=new Block(550,105,30,40)
block21=new Block(580,105,30,40)
block22=new Block(610,105,30,40)
block23=new Block(640,105,30,40)
block24=new Block(610,65,30,40)
block25=new Block(580,65,30,40)
block26=new Block(590,25,30,40)



ball   =  Bodies.circle(50,200,20)
World.add(world,ball)
  
chain=new SlingShot (this.ball,{x:150,y:200})



Engine.run(engine)
}

function draw() {
  background("lime");  
Engine.update(engine)


ground1.display()
ground2.display()
ground3.display()

stroke(15)
fill("black")
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()

fill("yellow")
block7.display()
block8.display()
block9.display()
block10.display()

fill("pink")
block11.display()
block12.display()

fill("green")
block13.display()

fill("purple")
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()

fill("yellow")
block20.display()
block21.display()
block22.display()
block23.display()

fill("255")
block24.display()
block25.display()

fill("magenta")
block26.display()

ellipse(ball.position.x,ball.position.y ,20)
chain.display()


}
function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}