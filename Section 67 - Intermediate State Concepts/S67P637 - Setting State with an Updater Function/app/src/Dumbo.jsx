import { useState } from "react";

// generateGameBoard is a state initilizer function.  
function generateGameBoard() {
    console.log("Making the initial game board.");
    return Array(5000);
}

// When the page is loaded, console will print out “Making the initial game board.”  After clicking on the button, state is changed to “Hello!”.  
export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard);
    return <button onClick={() => setBoard("Hello!")}>Click me to change state.</button>;
}