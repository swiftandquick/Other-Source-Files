function handleClick() {
    console.log("CLICKED THE BUTTON!");
}

function handleHover() {
    console.log("HOVERED OVER THE BUTTON");
}

// Give the first button an onClick attribute, give it a value of handleClick, which is a function, click on the button will invoke handleClick function.
// Give the second button an onMouseOver attribute, when mouse pointer entered it, handleHover function is invoked.     
export default function Clicker() {
    return (
        <div>
            <p>Click the Button</p>
            <button onClick={handleClick}>Click</button>
            <p>Hover Over Text</p>
            <p onMouseOver={handleHover}>Hover</p>
        </div>
    );
}