// colors is an array of strings, I use a map method to change the strings into <li> elements.  
// When I display the lis array, I display <li> elements.  
export default function ColorList({colors}) {
    return (
        <div>
            <p>Color List</p>
            <ul>{colors.map(color => <li style={{color : color}}>{color}</li>)}</ul>
        </div>
    );
}