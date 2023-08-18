import Die from "./Die";
import "./Dice.css";

// Dice is an array, so this component displays an array of Die components.  
// Each die component is assigned the key as the current index and pass on the current index's value as val on the Die component to display.  
function Dice({ dice, color }) {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  );
}

export default Dice;
