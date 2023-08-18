import ColorBox from "./ColorBox";
import "./ColorBoxes.css";

export default function ColorBoxes({colors}) {
    let id = 0;
    return (
        <div className="ColorBoxes">
            {[...Array(25)].map(p => {
                const randomColor = colors[(Math.floor(Math.random() * colors.length))];
                id++;
                return <ColorBox color={randomColor} colors={colors} key={id} />;
            })}
        </div>
    );
}