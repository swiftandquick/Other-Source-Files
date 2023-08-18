import "./Die.css";
// val is the value of the die, col.or is the background color.  
function Die({ val, color = "slateblue" }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}

export default Die;
