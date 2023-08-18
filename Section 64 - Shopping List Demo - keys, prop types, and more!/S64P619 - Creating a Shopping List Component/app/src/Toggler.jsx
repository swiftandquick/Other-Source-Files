import { useState } from "react";
import "./Toggler.css";

// isHappy starts off as true, but I click on the paragraph element, isHappy will become the opposite of what it currently is.  
// If isHappy is true, display a happy face, otherwise, display a sad face.  
export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    return <button className="Toggler" onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</button>
}