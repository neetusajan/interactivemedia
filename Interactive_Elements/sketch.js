function setup() {
  createCanvas(windowWidth, windowHeight);

  noLoop();
  resetSketch();

  //Button to randomly generate another peice.

  var button = createButton("CLICK HERE TO RANDOMLY GENERATE ANOTHER ONE!");

  //button syyle guide

  button.style("font-size", "1.2vw");
  button.style("background-color", "black");
  button.style("color: white");
  button.style("font-family", "copperplate");
  button.center(TOP);
  //indicate reset sketch when button is clicked
  button.mousePressed(resetSketch);
}

function resetSketch() {
  clear();
  background(0);

  //////////////////////////////////////////////////////////

  //define variable
  var randomColor;

  //random colors between rgba(200,200,200,200) is generated for outline of rectangles
  randomColor = color(random(255), random(255), random(255), 255);

  //for loop to indicate how many rectangles will be present which is 150
  for (var i = 0; i < 150; i++) {
    noFill();
    stroke(randomColor);
    strokeWeight(random(3));

    // rectangles fill up entire screen and have random height and width between 200 and 200 pixels.
    rect(random(windowWidth), random(windowHeight), random(200), random(200));
  }

  //////////////////////////////////////////////////////////

  //random colors between rgba(200,200,200,200) is generated for outline of rectangles
  randomColor = color(random(255), random(255), random(255), 255);

  //for loop to indicate how many rectangles will be present which is 150
  for (var i = 0; i < 75; i++) {
    noFill();
    stroke(randomColor);
    strokeWeight(random(1));

    // rectangles fill up entire screen and have random height and width between 200 and 200 pixels.
    rect(random(windowWidth), random(windowHeight), random(200), random(200));
  }

  //////////////////////////////////////////////////////////
 
  
  // 30 rectangles --- color (255,255,255,50) --- size (600,600)

  noStroke();
  strokeWeight(1);
  for (let i = 0; i < 20; i++) {
    fill(random(255), random(255), random(255), random(100));
    rect(random(windowWidth), random(windowHeight), random(600), random(600));
  }

  //////////////////////////////////////////////////////////
  // 70 rectangles --- color (200,200,200,50) --- size (250,250)

  stroke(1);
  strokeWeight(1);
  for (let i = 0; i < 70; i++) {
    fill(random(200), random(200), random(200), random(50));
    rect(random(windowWidth), random(windowHeight), random(250), random(250));
  }

  //////////////////////////////////////////////////////////
  // 65 rectangles --- color (200,200,200,80) --- size (250,250)
  strokeWeight(random(2));
  for (let i = 0; i < 65; i++) {
    fill(random(200), random(200), random(200), random(100));
    rect(random(windowWidth), random(windowHeight), random(250), random(250));
  }

  //////////////////////////////////////////////////////////
  // 65 rectangles --- color (255,255,255,150) --- size (90)

  stroke(1);
  strokeWeight(random(1));
  for (let i = 0; i < 65; i++) {
    fill(random(225), random(225), random(225), random(150));
    rect(random(windowWidth), random(windowHeight), random(90));
  }

   //////////////////////////////////////////////////////////
  // 100 rectangles --- color (255,255,255,200) --- size (60)

  stroke(1);
  strokeWeight(random(1));
  for (let i = 0; i < 100; i++) {
    fill(random(225), random(), random(255), random(200));
    rect(random(windowWidth), random(windowHeight), random(60));
  }

   //////////////////////////////////////////////////////////
  // 70 rectangles --- color (255,255,255,100) --- size (40,40)
  stroke(1);
  strokeWeight(random(1));
  for (let i = 0; i < 70; i++) {
    fill(random(255), random(255), random(255), random(175));
    rect(random(windowWidth), random(windowHeight), random(40), random(40));
  }

   //////////////////////////////////////////////////////////
  // 150 rectangles --- color (255,255,255,255) --- size (20,20)

  stroke(0);
  strokeWeight(random(1));
  for (let i = 0; i < 150; i++) {
    fill(random(255), random(255), random(255), random(255));
    rect(random(windowWidth), random(windowHeight), random(20), random(20));
  }

   //////////////////////////////////////////////////////////
  // 150 rectangles --- color (200,200,200,150) --- size (20)

  noStroke();
  //strokeWeight(1);
  for (let i = 0; i < 150; i++) {
    fill(random(200), random(200), random(255), random(150));
    rect(random(windowWidth), random(windowHeight), random(20));
  }

  //////////////////////////////////////////////////////////
  // 200 rectangles --- color (200,200,200,150) --- size (10)

  noStroke();
  //strokeWeight(1);
  for (let i = 0; i < 200; i++) {
    fill(random(200), random(200), random(200), random(150));
    rect(random(windowWidth), random(windowHeight), random(10));
  }

   //////////////////////////////////////////////////////////
  // 100 rectangles --- color (255,255,255,255) --- size (5)

  noStroke();
  //strokeWeight(1);
  for (let i = 0; i < 100; i++) {
    fill(random(255), random(255), random(255), random(255));
    rect(random(windowWidth), random(windowHeight), random(5));
  }
  
  
}
