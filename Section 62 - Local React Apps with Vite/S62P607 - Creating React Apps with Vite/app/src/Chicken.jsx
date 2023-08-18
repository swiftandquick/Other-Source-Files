// Import the Chicken.css from the same folder, which styles the <p> tag.  
import "./Chicken.css";

// JSX function that contains a component.
// Paragraph element has the class of "Chicken", which will be styled in a separate stylesheet.    
function Chicken() {
    return <p className="Chicken">Bock Bock Bock!</p>
}

// Export the component.  
export default Chicken;