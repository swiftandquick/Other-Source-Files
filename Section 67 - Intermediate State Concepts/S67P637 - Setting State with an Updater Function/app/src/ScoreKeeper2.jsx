import { useState } from "react";

export default function ScoreKeeper2({numPlayers=3, target=5}) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const addOne = (idx) => {
      setScores((prevScores) => {
        return prevScores.map((score, i) => {
          if (i === idx) return score + 1;
          return score;
        });
      });
    };
    const reset = () => {
      setScores(new Array(numPlayers).fill(0));
    };
    return (
      <div>
        <h1>Score Keeper</h1>
        <ul>
          {scores.map((score, index) => {
            return (
              <li style={{listStyleType: "none"}} key={index}>
                Player{index + 1}: {score}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => addOne(index)}>+1</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {score >= target && "WINNER!"}
              </li>
            );
          })}
        </ul>
        <button onClick={reset}>Reset</button>
      </div>
    );
}