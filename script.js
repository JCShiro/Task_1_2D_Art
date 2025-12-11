console.log("script.js is linked"); //Console log for debugging
const test_variable = "Both js documents are linked"; //Console log for debugging

//=========Global Variables=========\\
//Get references for each slider
const primary_red_slider = document.getElementById("red_primary");
const primary_green_slider = document.getElementById("green_primary");
const primary_blue_slider = document.getElementById("blue_primary");
//Primary color variables
let primaryRed = 95;
let primaryGreen = 160;
let primaryBlue = 158;

//=========Main Code=========\\
primary_red_slider.oninput = () => {
  colorPicker();
};
primary_green_slider.oninput = () => {
  colorPicker();
};
primary_blue_slider.oninput = () => {
  colorPicker();
};
/**
 * Changes the color variables when sliders are changed
 */
function colorPicker() {
  //   console.log("function called"); //console for debugging
  primaryRed = primary_red_slider.value;
  primaryGreen = primary_green_slider.value;
  primaryBlue = primary_blue_slider.value;
  console.log("Red:", primaryRed, "Green:", primaryGreen, "Blue:", primaryBlue);
}
