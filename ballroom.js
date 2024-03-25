let {Engine, Bodies, Composite, Runner, Render}=Matter;


let engine;
let world;
let circles = [];
let boundaries = [];

function setup() {
    createCanvas(400, 400);
    // create an engine
    engine = Engine.create();
    world = engine.world;
    boundaries.push(new Boundary(width, height/2, 10,height));
    boundaries.push(new Boundary(0, height/2, 10,height ));  
    boundaries.push(new Boundary(width/2, 0, width,10 ));  
    boundaries.push(new Boundary(width/2, height,width,10 ));  
    circles.push(new Circle(mouseX, mouseY, 10));
}
    
function mouseDragged() {
   circles.push(new Circle(mouseX, mouseY, 10));
}

function draw() {
    background(51);
    Engine.update(engine);
    
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
  
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
       
    }  
    
    
}