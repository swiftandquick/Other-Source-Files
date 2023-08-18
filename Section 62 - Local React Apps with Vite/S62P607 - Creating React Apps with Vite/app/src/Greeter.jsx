// Export the Greeter component.  
// Use destructuring to get the props person and from.  
// Since I can't return two elements, I can wrap the elements around a ghost element.  
export default function Greeter({person, from}) {
    return (
        <>
            <h1>Hi there, {person}!</h1>
            <h2>-- {from}</h2>
        </>
    );
}