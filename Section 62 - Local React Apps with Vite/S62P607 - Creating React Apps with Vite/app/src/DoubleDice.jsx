// Generate two random numbers from 1 to 3, if they are equal then I win.  
// Dynamically add styles, since I want to style all elements, I need to style the top level element, which is <div>. 
export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    const styles = {color: isWinner ? "green" : "red"};
    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>You win!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
}