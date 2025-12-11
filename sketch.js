console.log("sketch.js is linked")
console.log(test_variable)
//=========GLOBAL VARIABLES=========\\
let first = true;

//=========MAIN CODE=========\\
//Setup function, only called once.
function setup() {
  //creates a canvas 700x700px
  const canvas = createCanvas(700, 700);

  canvas.parent("canvas")
}

//Draw function. called endlessley (unless noLoop is used)
function draw() {
  //Mouse co-ordinates
  let xPos = mouseX;
  let yPos = mouseY;
  // Console log for testing
  // console.log("X: " +xPos+ " Y: " +yPos);

  //Sets background color of the canvas
  background(1);
  //calls the function that creates the grid
  drawSquare();
}

//=========Functions=========\\
/**
 * Creates the squares that make up the grid
 */
function drawSquare() {
  //sets the color of the squares
  fill(primaryRed, primaryGreen, primaryBlue);
  //loop to create squares on the x-axis
  for (x = 0; x < 10; x++) {
    //loop to create squares on the y-axis
    for (y = 0; y < 10; y++) {
      // creates a square 70px wide at point 0,0 and is
      // looped to create a new square every 70px
      square(0 + 70 * x, 0 + 70 * y, 70, 10);
    }
  }
  //console log to check the squares are loaded successfully. For testing
  if (first) {
    console.log("done loading squares");
    first = false;
  }
}
