/***********************************************************************************
Max Amido

Timer Assignment kinda fun, kinda quirky, not sure.
***********************************************************************************/

// Global Variables
var simpleTimer;

var waitForClick = true;
var elapsedSeconds = 0;

var startClick;
//var fakeButton;

// Setup code
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set up simple timer and start timer
  simpleTimer = new Timer(10000);
  simpleTimer.start();

  // Text setup
  textAlign(CENTER);
  textSize(24);
  fill(255);

  // Button setup
  startClick = new Clickable();
  
  // Button design details
  startClick.cornerRadius = 0;
  startClick.locate((windowWidth/4)*3, (windowHeight/8)*7);
  startClick.textScaled = true;
  startClick.text = "Start Challenge";
  startClick.resize(300, 100);

  // Button states
  startClick.onOutside = function () {
    this.color = "#EEAB10";
  }
  startClick.onHover = function () {
    this.color = "#B28110";
  }
  startClick.onPress = function () {
    waitForClick = false;
    simpleTimer.start();
    frameRate(100);
  }

// //Fake button attempt
//   fakeButton= new Clickable();
  
//   fakeButton.cornerRadius = 0;
//   fakeButton.locate(mouseX, windowHeight/4 *3);
//   fakeButton.textScaled = true;
//   fakeButton.text = "Click me PLZ";
//   fakeButton.resize(300, 100);

//   // Button states
//   fakeButton.onOutside = function () {
//     this.color = "#EEAB10";
//   }
//   fakeButton.onHover = function () {
//     this.color = "#B28110";
//   }
//   fakeButton.onPress = function () {
//
//   }


 }


// Calling out button and timer in draw function
function draw() {
  background(253,243,221);

  startClick.draw();

  if( waitForClick ) {

    text("click the button");
  }
  else{
   updateTimer(); 
  }

  // fakeButton();
}


// Looks for elapsed time and prints TIMES UP once expired
function updateTimer() {
  fill(0);
  if( simpleTimer.expired() ) {
    textSize(100);
    text("Why didn't you click me", width/2, 120);
    waitForClick = true;
    frameRate(2);
  }

  else{
    text( Math.round(simpleTimer.getRemainingTime()), width/2, 60)
  }
}

// function fakeButton(){
//   textBounds('Click me plz!', mouseX, mouseY,24);
// }