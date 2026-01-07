console.log("sketch.js is linked");
// console.log(test_variable);
//=========GLOBAL VARIABLES=========\\
let first = true;
let squaresIndex = 0;
//Array of square co-ordinates
let squares = [];
//Array of circle co-ordinates
let circles = [];
let shapes = [];
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
  // console.log(shapes);
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
  //calls the function that draws the shapes
  drawShapes();
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
      shapes.push({ x: 70 * x, y: 70 * y, type: "Square" });
    }
  }
}
//console log to check the squares are loaded successfully. For testing
// if (first) {
console.log("done loading squares"); //Log for debugging
// first = false;

function drawShapes() {
  for (let s of shapes) {
    if (s.type == "Square") {
      //sets the color of the squares
      fill(primaryRed, primaryGreen, primaryBlue);
      //draws the squares
      square(s.x, s.y, 70, 10);
    } else {
      //sets the color of the circles
      fill(secondaryRed, secondaryGreen, secondaryBlue);
      //draws the circles
      circle(s.x + 35, s.y + 35, 70);
    }
  }
}

/**
 * Function that deletes the square and replaces it with a circle
 */
function mouseClicked() {
  // console.log("mouse clicked");
  for (let i = 0; i < shapes.length; i++) {
    if (
      xPos > shapes[i].x &&
      xPos < shapes[i].x + 70 &&
      yPos > shapes[i].y &&
      yPos < shapes[i].y + 70
    ) {
      // console.log(shapes[i].type);
      if (shapes[i].type == "Square") {
        // console.log("if called");
        toCircle(i);
      } else {
        // console.log("else called");
        toSquare(i);
      }
    }
  }
}

function toSquare(i) {
  // console.log("toSquare function called");
  if (xPos >= shapes[i].x && xPos <= shapes[i].x + 70) {
    if (yPos >= shapes[i].y && yPos <= shapes[i].y + 70) {
      //moves the square's co-ordinates to the circles array
      shapes[i].type = "Square";
      console.log(shapes);
      // console.log("mouse clicked");
    }
  }
}

function toCircle(i) {
  //Checks if the mouse position is within the square boundaries
  if (xPos >= shapes[i].x && xPos <= shapes[i].x + 70) {
    if (yPos >= shapes[i].y && yPos <= shapes[i].y + 70) {
      //moves the square's co-ordinates to the circles array
      shapes[i].type = "Circle";
      console.log(shapes);
      // console.log("mouse clicked");
    }
  }
}
