var hr, mn, sc

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50)
  hr = hour()
  mn=mionute()
  sc=second()
  angleMode(DEGREES)

  ;
  
}

function draw() {
  background(255,255,255);  
 scAngle= map(sc, 0, 60, 0, 360);
  drawSprites();
}
line()
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
translate()
