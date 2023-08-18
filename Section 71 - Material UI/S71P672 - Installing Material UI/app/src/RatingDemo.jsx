// Import the rating component from Material UI.  
import Rating from "@mui/material/Rating";

import { useState } from "react";

// The Rating component start off as 3 stars, when the rating changes, like if I clicked on the 4th star, the component re-renders to 4 stars.  
export default function RatingDemo() {
    const [score, setScore] = useState(3);
    return (
        <div>
            <h1>Rating Demo</h1>
            <h2>Current Rating:  {score}</h2>
            <Rating name="simple-controlled" value={score} 
                onChange={(event, newScore) => {setScore(newScore);}}/>
        </div>
    );
}