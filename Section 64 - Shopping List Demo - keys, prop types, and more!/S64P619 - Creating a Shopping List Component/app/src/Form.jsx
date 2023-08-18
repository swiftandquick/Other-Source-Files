// e is the event handler object, I can use it to prevent default aftermath of submitting a form, which is reloading hte page.  
// Instead of reloading the page, a message is printed out in the console.  
function handleFormSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED THE FORM!");
}

// Invoke handleFormSubmit when the form is submitted.  
export default function form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}