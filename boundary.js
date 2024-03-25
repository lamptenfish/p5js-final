class Boundary{
    constructor(x,y,w,h){
        this.x =x;
        this.y=y;
        this.w=w;
        this.h=h;
    let options = {
        friction:0.5,
        restitution: 0.8,
        isStatic: true
    }
    this.body = Bodies.rectangle(this.x,this.y, this.w,this.h, options);
    Composite.add(world, this.body);
  }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(0);
        strokeWeight(5);
        rect(0, 0, this.w, this.h);
        pop();

    }
    
}