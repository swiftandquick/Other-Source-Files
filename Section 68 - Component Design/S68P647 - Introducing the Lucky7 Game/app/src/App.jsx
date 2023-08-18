import Lucky7 from "./Lucky7";
import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";

// Pass in function as prop value, sum is a method from utils.js, it sums the array elements, return true if sum of array elements is less than 4, otherwise return false.  
function lessThan4(dice) {
  return sum(dice) < 4;
}

// Pass in a function as prop value, return true if every element in the array are equal, otherwise return false.  
function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <div>
      {/* <BoxGrid /> */}
      <Lucky7 />
      <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN winCheck={allSameValue} numDice={3} title="Roll the same number"/>
      <BoxGrid />
    </div>
  );
}

export default App;
