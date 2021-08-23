class Paper{
    constructor (x,y,radius){
        var options = {
            isStatic: false,
            'restitutions':0.3,
            friction:0.5,
            density:1.2,

        }
        this.body = Bodies.circle(x,y,radius,options,);
        this.radius=radius;4
        this.image = loadImage("sprites/paper.png");
         World.add(world,this.body);

       
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        circle(pos.x,pos.y,this.radius);
        imageMode(CENTER)
        image(this.image,300,725,this.width,this.height);
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
      
};
}