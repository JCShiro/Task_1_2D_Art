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
  document.getElementById("red_primary").style.accentColor = `rgb(${primary_red_slider.value}, 0, 0)`;
};
primary_green_slider.oninput = () => {
  colorPicker();
  backgroundColor();
  document.getElementById("green_primary").style.accentColor = `rgb(0, ${primary_green_slider.value}, 0)`;
};
primary_blue_slider.oninput = () => {
  colorPicker();
  backgroundColor();
  document.getElementById("blue_primary").style.accentColor = `rgb(0, 0, ${primary_blue_slider.value})`;
};
secondary_red_slider.oninput = () => {
  colorPicker2();
  backgroundColor();
  document.getElementById("red_secondary").style.accentColor = `rgb(${secondary_red_slider.value}, 0, 0)`;
};
secondary_green_slider.oninput = () => {
  colorPicker2();
  backgroundColor();
  document.getElementById("green_secondary").style.accentColor = `rgb(0, ${secondary_green_slider.value}, 0)`;
};
secondary_blue_slider.oninput = () => {
  colorPicker2();
  backgroundColor();
  document.getElementById("blue_secondary").style.accentColor = `rgb(0, 0, ${secondary_blue_slider.value})`;
};
/**
 * Changes the color variables when sliders are changed
 */
function colorPicker() {
  //   console.log("function called"); //console for debugging
  //Set the primary color variables to the slider values
  primaryRed = primary_red_slider.value;
  primaryGreen = primary_green_slider.value;
  primaryBlue = primary_blue_slider.value;
  // console.log("Red:", primaryRed, "Green:", primaryGreen, "Blue:", primaryBlue); //Debugging log
}


function colorPicker2() {
  //   console.log("function called"); //console for debugging
  //Set the secondary color variables to the slider values
  secondaryRed = secondary_red_slider.value;
  secondaryGreen = secondary_green_slider.value;
  secondaryBlue = secondary_blue_slider.value;
  // console.log("Red:", secondaryRed, "Green:", secondaryGreen, "Blue:",secondaryBlue); //Debugging log
}

function backgroundColor() {
  document.getElementById(
    "primary_slider_box"
  ).style.backgroundColor = `rgb(${primaryRed}, ${primaryGreen}, ${primaryBlue})`;
  document.getElementById(
    "secondary_slider_box"
  ).style.backgroundColor = `rgb(${secondaryRed}, ${secondaryGreen}, ${secondaryBlue})`;
}
