import { useState } from "react";
import { v4 as uuid } from "uuid";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
// import ShoppingListForm from "./ShoppingListForm";

// items starts off as an empty array, but new objects can be added to the array when the form is submitted.  
// The addItem function checks if the item object has a falsy value, such as its product property being an empty string, if that's the case, the object will not   
// be added, then, the function adds a new object into the items array, also generates a unique id for each item via uuid.  
// addItem is being pass to the child component as a prop value for the prop of the same name.  
function ShoppingList() {
    const [items, setItems] = useState([]);
    const addItem = (item) => {
        if(!item.product) {
            return;
        }
        setItems((currItems) => {
            return [...items, {...item, id: uuid()}];
        })
    };  
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => <li key={i.id}>{i.product} - {i.quantity}</li>)}
            </ul>
            <ValidatedShoppingListForm addItem={addItem} />
        </div>
    )
}

export default ShoppingList;