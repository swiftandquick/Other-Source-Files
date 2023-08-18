// I have to import useState to use the useState hook.  
import { useState } from "react";

// num is set to 5 initially, num is the piece of the state, setNum is a function that can change the state.  
// Because I need to use setNum function inside the component, so changeNum function is inside the component (inside Counter function) as well.  
// If the button is clicked, changeNum will be invoked, within changeNum, setNum will be invoked, which increments num by 1 and display num's new value.  
export default function Counter() {
    const [num, setNum] = useState(5);
    const changeNum = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <p>The count is: {num} </p>
            <button onClick={changeNum}>Increment</button>
        </div>
    );
}