import { useState } from "react";

// Click the button will print out firstName and lastName values.  
// formData is an object that contains firstName, lastName, and password properties.  
// Set the formData properties equal to values of different input elements.  
// Set the name element equal to the property names of the formData object.  All input elements invoke handleChange function on change.  
// Inside the handleChange function, the changedField gets the name of the element that event is being invoked on.  
// For example, if event is being invoked on the element with name of "firstName", changedField will be "firstName".  
// newValue is whatever the new input value is, if I changed the input's value from "" to "aaa", newValue will be "aaa".  
// Use spread operator to set the new formData value to currData's new property values.  
// changedField gets the changed property of formData object, and I set it to newValue.  
function BetterSignupForm() {
    const [formData, setFormData] = useState({firstName: "", lastName: "", password: ""});
    const handleChange = (e) => {
        const changedField = e.target.name;
        const newValue = e.target.value;
        setFormData(currData => {
            return {
                ...currData, [changedField]: newValue
            };
        });
    }
    const handleSubmit = () => {
        console.log(formData);
    }
    return (
        <div>
            <label htmlFor="firstname2">Enter the first name:  </label>
            <input type="text" placeholder="firstname" value={formData.firstName} 
                onChange={handleChange} id="firstname2" name="firstName" />
            <label htmlFor="lastname2">Enter the last name:  </label>
            <input type="text" placeholder="lastname" value={formData.lastName} 
                onChange={handleChange} id="lastname2" name="lastName" />
            <label htmlFor="password">Enter the password:  </label>
            <input type="password" placeholder="password" value={formData.password} 
                onChange={handleChange} id="password" name="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default BetterSignupForm;