$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(560, 500, 203, 20); // short but wide platform located 560 pixels from the left of the screen and 500 pixels from the top of the screen
createPlatform(250, 620, 205, 20); // short but wide platform located 250 pixels from the left of the screen and 620 pixels from the top of the screen
createPlatform(150, 410, 203, 20); // short but wide platform located 150 pixels from the left of the screen and 410 pixels from the top of the screen
createPlatform(820, 400, 100, 10); // short but wide platform located 820 pixels from the left of the screen and 400 pixels from the top of the screen
createPlatform(1220, 400, 100, 10); // short but wide platform located 1220 pixels from the left of the screen and 400 pixels from the top of the screen



    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 400, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (400, 300), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 500, 100); // creates a "grace" collectible at the coordinates (500, 100), falling with default gravity and bouncing with default bounce %
    createCollectable("steve", 800, 100, 20, 0.5); // creates a "steve" collectible at the coordinates (800, 100), falling with a high gravity of 20, and bouncing with 50% bounce
    createCollectable("grace", 1000, 100); // creates a "grace" collectible at the coordinates (1000, 100), falling with default gravity and bouncing with default bounce %


    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("left", 400, 1000); // cannon on left wall, 400px down, shooting once per second
    createCannon("top", 1100, 1000); // cannon on top wall, 600px down, shooting twice per second
    createCannon("right", 600, 1000); // cannon on left wall, 600px down, shooting once per second
    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
