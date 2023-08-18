import { useState } from "react";

// Click the button will print out firstName and lastName values.  
function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const updateLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleSubmit = () => {
        console.log(firstName + " " + lastName);
    }
    return (
        <div>
            <label htmlFor="firstname">Enter the first name:  </label>
            <input type="text" placeholder="firstname" value={firstName} onChange={updateFirstName} id="firstname" />
            <label htmlFor="lastname">Enter the last name:  </label>
            <input type="text" placeholder="lastname" value={lastName} onChange={updateLastName} id="lastname" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SignupForm;