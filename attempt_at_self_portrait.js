function setup() {
  createCanvas(800, 800);
   noLoop(); 
  
   background(223, 184, 250); // Set a purple background


  let numFlowers = 250; // Number of flowers

  for (let i = 0; i < numFlowers; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(30, 80); // Random size for each flower
    drawFlower(x, y, size);
  }
}

function drawFlower(x, y, size) {
  let petalColor = color(283,75,0); // Pastel purple
  let centerColor = color(255, 230, 250,150); // Light center

  // Draw petals
  for (let j = 0; j < 6; j++) {
    let angle = TWO_PI / 6 * j;
    let petalX = x + cos(angle) * (size * 0.6); // Petal length based on size
    let petalY = y + sin(angle) * (size * 0.6);
    fill(petalColor);
    ellipse(petalX, petalY, size, size ); // Petal size based on flower size
  }

  // Draw flower center
  fill(centerColor);
  ellipse(x, y, size * 0.5, size * 0.5); // Center size based on flower size
}


function draw() {
  background(228, 196, 240); // Set a purple background

  let numFlowers = 250; // Number of flowers

  for (let i = 0; i < numFlowers; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(30, 80); // Random size for each flower
    drawFlower(x, y, size);
  }
}

function drawFlower(x, y, size) {
  let petalColor = color(202, 162, 235,150); // Pastel purple
  let centerColor = color(255, 230, 250,150); // Light center

  // Draw petals
  for (let j = 0; j < 6; j++) {
    let angle = TWO_PI / 6 * j;
    let petalX = x + cos(angle) * (size * 0.6); // Petal length based on size
    let petalY = y + sin(angle) * (size * 0.6);
    fill(petalColor);
    ellipse(petalX, petalY, size, size ); // Petal size based on flower size
  }

  // Draw flower center
  fill(centerColor);
  ellipse(x, y, size * 0.5, size * 0.5); // Center size based on flower size

}
  function draw (){
    

  
// Draw hair
  drawHair(400, 300, 200);
  
  // Draw face
  drawFace(400, 400, 200);

  
}

function drawFace(x, y, size) {
  fill(255, 220, 185); // Skin color
  stroke(0); // Black outline
  strokeWeight(2);
  ellipse(x, y, size, size * 1.2); // Face shape

  // Eyes
  fill(0); // Black color for eyes
  noStroke();
  ellipse(x - 50, y - 30, 30, 20); // Left eye
  ellipse(x + 50, y - 30, 30, 20); // Right eye

  // Mouth
  fill(255, 100, 100); // Pink color for mouth
  arc(x, y + 20, 80, 40, 0, PI); // Mouth shape
}

function drawHair(x, y, size) {
  fill(171, 145, 106); // Blonde hair color
  stroke(0); // Black outline for hair
  strokeWeight(2);
  ellipse(400,450,300,400) }
