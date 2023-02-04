const userInput = prompt("Enter something");

/** If userInput holds the value of false, 0, empty string, null, NaN, or undefine, it will be considered "False-y",
 * otherwise it's true-y.  
 */
if (userInput) {
    console.log("True-y");
}
else {
    console.log("False-y");
}