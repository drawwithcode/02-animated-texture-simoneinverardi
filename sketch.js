let iterator = 0.15;

let scl = 20;
let cols;
let rows;

let zoff = 0;

function preload(){
  // put preload code here
}

function setup() {

  let cnv = createCanvas(800, 800);
  let xCnv = (windowWidth - width) / 2;
  let yCnv = (windowHeight - height) / 2;
  cnv.position(xCnv, yCnv);

  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  background(255);
  if (mouseIsPressed==true){
    Dynamic();
  } else {
    Static();
  }
}

function Dynamic() {
  let yoff = 0;
  for (let x = 0; x < cols; x++){
    let xoff = frameCount / 40;
    for (let y = 0; y < rows; y ++){
      let index = ( x + y  * width) * 4;
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      xoff += iterator;

      stroke(0);
      fill(lerpColor(color("sandyBrown"), color("PowderBlue"),yoff / 5));

      push();
      noStroke();
      translate(x * scl, y * scl);
      rotate(v.heading());
      rect(0, 0, scl / 2 , scl * 2, 10);
      pop();
    }
    yoff += iterator;

    zoff += 0.0005;
  }
}

function Static() {

  let yoff = 0;
  for (let x = 0; x < cols; x++){
    let xoff = 0;
    for (let y = 0; y < rows; y ++){
      let index = ( x + y  * width) * 4;
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);


      stroke(0);
      fill(0);

      push();
      noStroke();
      translate(x * scl, y * scl);
      rect(0, 0, scl / 2);
      pop();
    }
  }
  push();
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/4, 400,scl*3);
  mouseval = false;
  textSize(24);
  textAlign(CENTER,CENTER);
  fill(0);
  text("Hold down left mouse button",width/2,height/4);

  pop();

}
