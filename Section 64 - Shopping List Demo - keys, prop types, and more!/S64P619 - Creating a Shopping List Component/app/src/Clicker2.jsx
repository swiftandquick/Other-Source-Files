export default function Clicker2({message, buttonText}) {
    return <button onClick={() => alert(message)}>{buttonText}</button>;
}