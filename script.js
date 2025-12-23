console.log("script.js is linked"); //Console log for debugging
const test_variable = "Both js documents are linked"; //Console log for debugging

//=========Global Variables=========\\
//Get references for each slider
const primary_red_slider = document.getElementById("red_primary");
const primary_green_slider = document.getElementById("green_primary");
const primary_blue_slider = document.getElementById("blue_primary");
const secondary_red_slider = document.getElementById("red_secondary");
const secondary_green_slider = document.getElementById("green_secondary");
const secondary_blue_slider = document.getElementById("blue_secondary");
//Primary color variables
let primaryRed = 95;
let primaryGreen = 160;
let primaryBlue = 158;
//Secondary color variables
let secondaryRed = 255;
let secondaryGreen = 255;
let secondaryBlue = 255;

//=========Main Code=========\\
primary_red_slider.oninput = () => {
  colorPicker();
  backgroundColor();
};
primary_green_slider.oninput = () => {
  colorPicker();
  backgroundColor();
};
primary_blue_slider.oninput = () => {
  colorPicker();
  backgroundColor();
};
secondary_red_slider.oninput = () => {
  colorPicker2();
  backgroundColor();
};
secondary_green_slider.oninput = () => {
  colorPicker2();
  backgroundColor();
};
secondary_blue_slider.oninput = () => {
  colorPicker2();
  backgroundColor();
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

function colorPicker2() {
  //   console.log("function called"); //console for debugging
  secondaryRed = secondary_red_slider.value;
  secondaryGreen = secondary_green_slider.value;
  secondaryBlue = secondary_blue_slider.value;
  console.log(
    "Red:",
    secondaryRed,
    "Green:",
    secondaryGreen,
    "Blue:",
    secondaryBlue
  );
}

function backgroundColor() {
  document.getElementById("primary_slider_box").style.backgroundColor = `rgb(${primaryRed}, ${primaryGreen}, ${primaryBlue})`;
  document.getElementById("secondary_slider_box").style.backgroundColor = `rgb(${secondaryRed}, ${secondaryGreen}, ${secondaryBlue})`;
}