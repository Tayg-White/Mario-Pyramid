let height = parseInt (prompt("How high is your pyramid?"));

printPyramid(height);
// TODO #2
// Take in user input for the height
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function determineHeightAndThenDrawPyramid(){
    const element = document.getElementById("drawBtn");
    element.addEventListener("click", myFunction);
  
    for(let i=0; i<height; i++){
    let bricks = i + 2;
    let spaces = height - i - 1;
    let layer = "";
    for(let j=0; j<spaces; j++){
      layer += ".";
    }
    for(let j=0; j<bricks; j++){
      layer += "#";
    }
    console.log(layer); //once a row is done we print it out
    // TODO #1
    // print that pyramid!
    const pyramid = document.createElement("p");
    const node = document.createTextNode(layer);
    pyramid.appendChild(node);
    const element = document.getElementById("pyramid");
    element.appendChild(pyramid);
  }
}

function printPyramid(height) {
  for(let i=0; i<height; i++){
    let bricks = i + 2;
    let spaces = height - i - 1;
    let layer = "";
    for(let j=0; j<spaces; j++){
      layer += ".";
    }
    for(let j=0; j<bricks; j++){
      layer += "#";
    }
    console.log(layer); //once a row is done we print it out
    // TODO #1
    // print that pyramid!
    const pyramid = document.createElement("p");
    const node = document.createTextNode(layer);
    pyramid.appendChild(node);
    const element = document.getElementById("pyramid");
    element.appendChild(pyramid);
  }
}
