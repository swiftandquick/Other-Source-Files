// Use destructuring to get the prop.  
// Get a random element from the values array and display it.  
export default function ListPicker({values}) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randEl = values[randIdx];
    return (
        <div>
            <p>Random value: {randEl}</p>
        </div>
    );
}