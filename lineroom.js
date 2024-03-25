let lines = [];
function setup(){
    canvas(400,400)

}
function draw(){
    background(51);
    for (let i =lines.length(); i>=0; i--){
        i.show();
    
    }


}
function mouseDragged() {
    lines.push(new lines(mouseX,10));
 }