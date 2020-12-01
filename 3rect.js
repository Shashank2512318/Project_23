class rectangle {
    constructor(x, y, w, h) {
        
        var rectangle_options={
   
            isStatic: true

        
          }
        
          this.body= Bodies.rectangle(x,y,w,h,rectangle_options);
          World.add(world,this.body);


this.w= w;
this.h= h;


}
       


         display() {
            fill("red");
            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y, this.w, this.h);
            
        
        }
        
    }