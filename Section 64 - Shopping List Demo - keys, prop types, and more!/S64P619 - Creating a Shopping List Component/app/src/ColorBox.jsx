import { useState } from "react";

export default function ColorBox({color, colors}) {
    const [currentColor, setColor] = useState(color);
    const changeColor = () => {
        const randomColor = colors[(Math.floor(Math.random() * colors.length))];
        setColor(randomColor);
    }
    return <div onClick={changeColor} style={{width:"100px", height:"100px", backgroundColor:currentColor}}></div>
}