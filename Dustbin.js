
class Dustbin{
    constructor (x,y,width,height){
        var options={
            'restitutions' : 0.8,
            isStatic: true,
        }
        this.body=Bodies.rectangle(420,770,100,200);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
 
        this.body1 = Bodies.rectangle(400,770,200,100);
        this.width = width;
        this.height = height;
        World.add(world, this.body1);
 
        this.body2 = Bodies.rectangle(440,770,100,200);
        this.width = width;
        this.height = height;
        World.add(world, this.body2);
      
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        rect(pos.x,pos.y,this.width,this.height);
        rect1(pos.x,pos.y,this.width,this.height);
        rect2(pos.x,pos.y,this.width,this.height);
        this.image = "dustbingreen.png";
    }
   
 
}
