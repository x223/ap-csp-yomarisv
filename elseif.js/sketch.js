function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
   if (mouseX < 2 * windowWidth / 5) {
    bgColor = '#FDED29';
  } else if (mouseX < 3 * windowWidth / 5) {
    bgColor = '#1FF070';
  } else if (mouseX < 4 * windowWidth / 5) {
    bgColor = '#1F2CF0';
  } else if (mouseX < windowWidth / 5) {
    bgColor = '#A91FF0';
  } else {
    bgColor = '#F01F5F';
}