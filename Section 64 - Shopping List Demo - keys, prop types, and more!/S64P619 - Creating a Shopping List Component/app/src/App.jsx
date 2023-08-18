import './App.css'

// Import components from .jsx files.  
import ShoppingList from './ShoppingList';
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from './Form';
import Clicker2 from "./Clicker2";
import Counter from './Counter';
import Toggler from './Toggler';
import TogglerCounter from "./TogglerCounter";
import ColorBoxes from './ColorBoxes';

// This array of objects will be passed to ShoppingList function as a prop.  
// Add id as an identifier which I will use for key prop later.  
const data = [
  {id: 1, item: 'eggs', quantity: 12, completed: false}, 
  {id: 2, item: 'milk', quantity: 1, completed: true}, 
  {id: 3, item: 'chicken breasts', quantity: 4, completed: false}, 
  {id: 4, item: 'carrots', quantity: 6, completed: true}
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colorList = ["#E53935", "#E91E63", "#0C27B0", "#673AB7", "#3F51B5", 
                  "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", 
                  "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", 
                  "#FF5722"];

function App() {

  return (
    <div>
      <ShoppingList items={data} />
      <PropertyList properties={properties} />
      <Clicker />
      <Form />
      <Clicker2 message="Hi!" buttonText="Please click me!"/>
      <Counter />
      <Toggler />
      <TogglerCounter />
      <ColorBoxes colors={colorList} />
    </div>
  )
}

export default App
