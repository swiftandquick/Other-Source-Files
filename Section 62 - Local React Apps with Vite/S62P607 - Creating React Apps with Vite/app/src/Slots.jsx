// Win if all 3 props are equal, otherwise lose.  
export default function Slots({val1, val2, val3}) {
    const bool = val1 === val2 && val2 === val3;
    return (
        <div>
            <ul>
                <li>{val1}</li>
                <li>{val2}</li>
                <li>{val3}</li>
            </ul>
            {bool ? <h2 style={{color: "green"}}>You win!</h2> :  <h2 style={{color: "red"}}>You lose!</h2>}
            {bool && <h3>Congrats!!!</h3>}
        </div>
    );
}