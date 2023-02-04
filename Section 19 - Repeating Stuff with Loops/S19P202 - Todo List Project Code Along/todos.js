// Ask what the user what to do.  
let input = prompt("What would you like to do?");

// Start with an array with two items.  
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

// As long as input isn't 'q' or 'quit', the while loop continues to ask the user to put in an input.  
while (input.toLowerCase() !== 'quit' && input.toLowerCase() !== 'q') {
    // If the input is list, print out all items and their respective indices.  
    if (input === 'list') {
        console.log("****************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:  ${todos[i]}`);
        }
        console.log("****************");
    }
    // If input is 'new', I can add an element to the end of the todos array.  
    else if (input === 'new') {
        const newTodo = prompt("OK, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }
    // If input is 'delete', remove an element from the array based on the index.  
    else if (input === 'delete') {
        // Convert input string to a number, if it's not convertable, then the value will return NaN.  
        const index = parseInt(prompt("OK, enter an index to delete."));
        // If my string is not a NaN.  
        if (!Number.isNaN(index)) {
            if (index < 0 || index >= todos.length) {
                console.log(`${index} is not a valid index.`);
            }
            else {
                const deleted = todos.splice(index, 1);
                console.log(`OK, deleted ${deleted}.`);
            }
        }
        else {
            console.log("Unknown index.");
        }
    }
    input = prompt("What would you like to do?");
}

console.log("You quit the app.");