import { useState, useEffect } from "react";

// Increment count by 1 and display the new count every time the button is created, component is re-rendered every time the button is clicked.  
// name is starts out as an empty string, it re-renders every time the input value is changed.  
// myEffect runs when the component is first rendered and it runs again every time the piece of state count is changed.  
export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(function myEffect() {
        console.log("My effect was called.");
    }, [count]);
    const increment = () => {
        setCount((c) => c + 1);
    };
    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>{name}</p>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    );
}