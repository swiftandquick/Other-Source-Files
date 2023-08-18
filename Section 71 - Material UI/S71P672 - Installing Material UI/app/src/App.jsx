import './App.css';

// Import components from Material UI.  
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";

import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from "./Navbar";

// Button is now a component from @mui/material rather than an HTML element.  
// The Button component can be set to different variant, each variant has a different outlook.  
// I can change color and size for the Button component, as well as give it onClick events.  
// I can also add an icon, for example, I added the AlarmIcon component, I make it a button by wrapping it around the IconButton component.  
function App() {
  return (
    <div>
      <Button variant="contained">Contained</Button>
      <Button variant="text">Text</Button>
      <Button variant="outline">Outline</Button>
      <Button color="success" variant="contained" onClick={() => alert("Hi")}>Success</Button>
      <Button color="secondary" variant="contained" size="small" onClick={() => alert("Hi")}>Secondary</Button>
      <IconButton color="secondary" aria-label="add an alarm"><AlarmIcon /></IconButton>
      <RatingDemo />
      <FormDemo />
      <Navbar />
    </div>
  );
}

export default App
