import { useState } from "react";

// Import v4 from uuid, use uuid as alias for v4. b
import { v4 as uuid } from "uuid";

// Generate a random emoji.  
function randomEmoji() {
    const choices = [":)", ":(", ":|", "XD", "O_O", "UwU"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// The emoji array initially only has one element that contains a random emoji.  
// When the button is clicked, addEmoji is invoked, in turn, setEmojis (state function) is invoked.  
// setEmojis takes in a new array, so the component will re-render, the new array contains the previous emojis plus an additional random emoji element.  
// Use uuid to generate a unique id for each emoji, calling uuid() will generate a random ID.  
// Click on the emoji will invoke an anonymous function, then the anonymous function will invoke deleteEmoji.  
// The reason why we don't want to invoke deleteEmoji immediately because I will invoke deleteEmoji even before I click on the emoji.  
// deleteEmoji takes id as the argument, then deletes the emoji with the specified id using the filter method.  
// Use map method to turn all emojis to "<3" when the second button is clicked.  
export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]); 
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: randomEmoji()}]);
    }
    const deleteEmoji = (id) => {
        setEmojis(oldEmojis => {
            return oldEmojis.filter(e => e.id !== id);
        })
    }
    const allHearts = () => {
        setEmojis(oldEmojis => {
            return oldEmojis.map((e) => {
                return { ...e, emoji: "<3" };
            });
        });
    }
    return (
        <div>
            {emojis.map((e) => {
                return <span onClick={() => deleteEmoji(e.id)} style={{fontSize:'4rem', cursor:'pointer'}} key={uuid()}>{e.emoji}</span>
            })}
            <br />
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={allHearts}>Make Them All Hearts</button>
        </div>
    );
}