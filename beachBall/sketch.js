var rot;
var x;
var rotSpeed;
var radius;

function setup() {
  createCanvas(2400, 200);
  background(200);
  rot = 0;
  x=width/2;
  rotSpeed=.08; //in radians per frame
  radius=100;
}

function draw() {
  background(200);

  noStroke()
      translate(x, height-radius);
  rotate(rot);
  fill(0, 255, 0);
  arc(0, 0, radius*2, radius*2, 0, TWO_PI / 4, PIE);
  fill(255, 255, 0);
  arc(0, 0, radius*2, radius*2, TWO_PI / 4, 2 * TWO_PI / 4, PIE);
  fill(0, 255, 255);
  arc(0, 0, radius*2, radius*2, 2 * TWO_PI / 4, 3 * TWO_PI / 4, PIE);
  fill(255, 0, 0);
  arc(0, 0, radius*2, radius*2, 3 * TWO_PI / 4, 4 * TWO_PI / 4, PIE);
  resetMatrix();
  

  if ((x>width-radius)||(x<0+radius)){
      rotSpeed=-rotSpeed;
  }
  rot = rot + rotSpeed;
  //to calculate deltaX  deltaX/circumference = rotSpeed/2PI
  //var deltaX= ((2*PI*radius) * rotSpeed)/2*PI
  var deltaX = rotSpeed*radius
  x=(x+deltaX);
  
}