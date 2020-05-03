var r = 0
var b= 0
var g= 0
function setup(){
  createCanvas(1200,1200)
}
function draw (){
 
  text("move the mouse to change the colour",500,50)
  ellipse (mouseX,200,50,50)
}
function mouseMoved(){
  r = Math.round(random(0,255));
  g = Math.round(random(0,255));
  b = Math.round(random(0,255));
  background(r,g,b);
}


