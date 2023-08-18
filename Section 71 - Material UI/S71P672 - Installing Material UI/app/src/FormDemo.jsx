// Import components from Material UI.   
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

import { useState } from "react";

// In the TextField component, label is the text displayed before I enter the component, placeholder is the text displayed when I enter the component.  
// I can assign value and events onto TextField component just like I can with input elements.  
// The h1 element displays the name whenever there is change to the TextField's value.  
// The Slider component has values between 0 to 100.  I set volume (value of Slider) initially to 50.  
// Display the value of the Slider when it first rendered or when it changes.
// Wrap everything inside the Box component and style it via sx prop, p is the padding.  
export default function FormDemo() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(50);
    const updateName = (e) => {
        setName(e.target.value);
    };
    const changeVolume = (e, newVal) => {
        setVolume(newVal)
    };
    return (
        <Box sx={{ border: "1px solid red", p: 6 }}>
            <h1>Name is {name}.</h1>
            <TextField id="outlined-basic" placeholder="Fido" label="Puppy Name" 
                variant="outlined" value={name} onChange={updateName} />
            <h2>Volume: {volume}</h2>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
        </Box>
    );
}