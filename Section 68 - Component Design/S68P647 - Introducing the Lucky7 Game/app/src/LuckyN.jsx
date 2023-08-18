import { useState } from "react";
import { getRolls } from "./utils";
import Button from "./Button";
import Dice from "./Dice";

// winCheck is a function that returns a boolean and takes dice array as argument.  
// If winCheck is allTheSame, all dice elements has to be equal to return true.  
// If winCheck is lessThan4, all dice elements combine has to be less than 4 to return true.  
// Default title is "Dice Game" and default numDice (# of elements in Dice array) is 2.  
// The button has the clickFunc prop's value set to roll, a function can be used as a prop.  
// When the button is clicked, roll function will be invoked, and the imported functio getRolls() will be invoked.  
// getRolls return an array of random numbers, the amount of numbers base on what numDice is.  
// I can use the piece of state, dice, as a prop value, I used it inside the Dice component.  
function LuckyN({ title = "Dice Game", numDice = 2, winCheck }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);
  const roll = () => setDice(getRolls(numDice));
  return (
    <main className="LuckyN">
      <h1>
        {title} {isWinner && "You Win!"}
      </h1>
      <Dice dice={dice} />
      <Button clickFunc={roll} label="Re-Roll" />
    </main>
  );
}

export default LuckyN;
