import { useState } from "react";

// The value of the input element is a piece of state (username).  
// When the input element changes, updateUsername is invoked.  e inside the updateUsername function is an event handler object.  
// Update the username's (piece of state) value to the newly changed value via e.target.  
// Because the state changes, the input element will re-render.  
// The label elements should use htmlFor instead of for, because for is a reserved keyword for JavaScript.  
function UsernameForm() {
    const [username, setUsername] = useState("timmy");
    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    return (
        <div>
            <label htmlFor="username">Enter a username:  </label>
            <input type="text" placeholder="username" value={username} onChange={updateUsername} id="username" />
            <button>Submit</button>
        </div>
    );
}

export default UsernameForm;