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
function printPyramid(height) {
  for(let i=0; i<height; i++){
    let bricks = i + 2;
    let spaces = height - i - 1;
    let layer = "";
    for(let j=0; j<spaces; j++){
      layer += " ";
    }
    for(let j=0; j<bricks; j++){
      layer += "#";
    }
    console.log(layer); //once a row is done we print it out
  }
  console.log("Uh oh... the pyramid is under construction.");
  console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid!

}
