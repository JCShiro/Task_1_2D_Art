console.log("sketch.js is linked");
// console.log(test_variable);
//=========GLOBAL VARIABLES=========\\
let first = true;
let squaresIndex = 0;
//Array of square co-ordinates
let squares = [];
//Array of circle co-ordinates
let circles = [];
//Mouse position variables
let xPos = 0;
let yPos = 0;

//=========MAIN CODE=========\\
//Setup function, only called once.
function setup() {
  //creates a canvas 700x700px
  const canvas = createCanvas(700, 700);

  canvas.parent("canvas");

  createSquares();
  // console.log(squares);
}

/**
 * Loops endlessley, what makes the canvas work
 */
function draw() {
  //Mouse co-ordinates
  xPos = mouseX;
  yPos = mouseY;
  // Console log for testing
  // console.log("X: " +xPos+ " Y: " +yPos);

  //Sets background color of the canvas
  background(1);
  //calls the function that draws the squares
  drawSquares();
  //calls the function that draws the circles
  drawCircles();
}

//=========Functions=========\\

/**
 * Creates the squares that make up the grid
 */
function createSquares() {
  //loop to create squares on the x-axis
  for (x = 0; x < 10; x++) {
    //loop to create squares on the y-axis
    for (y = 0; y < 10; y++) {
      // creates a square 70px wide at point 0,0 and is
      // looped to create a new square every 70px
      square(0 + 70 * x, 0 + 70 * y, 70, 10);
      squares.push({ x: 70 * x, y: 70 * y, type: "Square" });
    }
  }
  //console log to check the squares are loaded successfully. For testing
  // if (first) {
  console.log("done loading squares"); //Log for debugging
  // first = false;
}

/**
 * Draws the squares onto the canvas
 */
function drawSquares() {
  //iterates through the squares array, like using let i=0...
  for (let s of squares) {
    //sets the color of the squares
    fill(primaryRed, primaryGreen, primaryBlue);
    //draws the squares
    square(s.x, s.y, 70, 10);
  }
}

/**
 * Function that deletes the square and replaces it with a circle
 */
function mouseClicked() {
  // console.log("mouse clicked");
  for (let i = 0; i < squares.length; i++) {
    // console.log(squares[i].type);
    if (squares[i].type == "Square") {
      console.log("if called");
      toCircle(i);
    } else{
      console.log("else called")
      toSquare(i);
    }
  }
}
/*
 * Draws the circles onto the canvas
 */
drawCircles = () => {
  //iterates through the circles array, like using let i=0...
  for (let c of circles) {
    //sets the color of the circles
    fill(secondaryRed, secondaryGreen, secondaryBlue);
    //draws the circles
    circle(c.x + 35, c.y + 35, 70);
  }
};
function toSquare(i) {
  console.log("toSquare function called");
  if (xPos >= circles[i].x && xPos <= circles[i].x + 70) {
    if (yPos >= circles[i].y && yPos <= circles[i].y + 70) {
      //moves the square's co-ordinates to the circles array
      squares.push({ x: circles[i].x, y: circles[i].y, type: "Square" });
      console.log(squares);
      squares.splice(i, 1);
      console.log(circles);
      // console.log("mouse clicked");
    }
  }
}

function toCircle(i) {
  //Checks if the mouse position is within the square boundaries
  if (xPos >= squares[i].x && xPos <= squares[i].x + 70) {
    if (yPos >= squares[i].y && yPos <= squares[i].y + 70) {
      //moves the square's co-ordinates to the circles array
      circles.push({ x: squares[i].x, y: squares[i].y, type: "Circle" });
      console.log(circles);
      squares.splice(i, 1);
      console.log(squares);
      // console.log("mouse clicked");
    }
  }
}
