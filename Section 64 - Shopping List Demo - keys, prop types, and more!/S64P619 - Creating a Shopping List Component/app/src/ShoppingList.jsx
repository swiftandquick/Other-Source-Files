import ShoppingListItem from "./ShoppingListItem";

// The component ShoppingList contains smaller components imported from ShoppingListItem.  
// Use the map method to iterate through each object in the array, and pass in each object's properties as props in ShoppingListItem component.  
// I have to set the key inside ShoppingList instead of in its child component ShoppingListItem.  
function ShoppingList({items}) {
    return (
        <ul>
            {items.map(i => <ShoppingListItem {...i} key={i.id}/>)}
        </ul>
    );
}

export default ShoppingList;