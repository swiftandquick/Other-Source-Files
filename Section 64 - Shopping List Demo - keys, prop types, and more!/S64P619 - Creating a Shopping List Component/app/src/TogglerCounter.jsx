import { useState } from "react";
import "./Toggler.css";

// I can have multiple pieces of state in a component, here, I have isHappy and count as pieces of state.  
export default function TogglerCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    const incrementCount = () => setCount(count + 1)
    return (
        <div>
            <button className="Toggler" onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</button>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}