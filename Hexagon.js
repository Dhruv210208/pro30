class Bird  {
    constructor(x,y,width,height){
      
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = x;
        this.height = y;
        this.width = width;
        this.height = height;
            this.trajectory =[];

        World.add(world, this.body);
    }
  
    display() {
     // this.body.position.x = mouseX;
     //this.body.position.y = mouseY;

      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  }
  