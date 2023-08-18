import {useState} from "react";

// I can pass a function in a state function such as setCount.  
// For the addThree function, I can't put count + 1 in set count and repeat it 3 times, because count will reset to the current count every time a new setCount
// function is invoked.  So, instead I put an anonymous arrow function in it.  Now, when count starts at 0, the first setCount function will return 1, the second 
// setCount function will return 2, and the third setCount function will return 3.  So click on the second button will increment count by 3.  
export default function Counter() {
    console.log("Rendered!");
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    }
    const addThree = () => {
        setCount(currentCount => currentCount + 1);
        setCount(currentCount => currentCount + 1);
        setCount(currentCount => currentCount + 1);
    }
    const setToTen = () => {
        setCount(10);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>Set to 10</button>
        </div>
    );
}