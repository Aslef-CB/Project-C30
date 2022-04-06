class Block{
    constructor(x, y, width, height) {
        
       this.block = 255

       this.image= loadImage ("Tijolo.png");

        var options = {
           
            restitution :0.4,
            friction :1.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        if (this.body.speed<5){
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0,0,this.width, this.height);
          pop();          

        }
      
        else{

          World.remove(world, this.body);
          push();
          this.block-= 10
          tint(255,this.block);
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
          pop();
      }

      }
}