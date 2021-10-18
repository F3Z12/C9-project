
function setup() {
  createCanvas(400,400);
red = createButton("RED")  
red.position(100,50);
red.mousePressed(redbackground)

green = createButton("GREEN")
green.position(250,50)
green.mousePressed(greenbackground)
}
function redbackground(){
  r = 255;
  g = 0;
  b = 0;
}
function greenbackground(){
  r = 0;
  g = 255;
  b = 0;
}

function draw() 
{
  background(30);

}




