import './App.css';

// Import components from other .jsx files.  
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from "./ColorList";
import Slots from "./Slots";

function App() {

  // The Greeter function has props which can be passed into the Greeter function as arguments.  
  // The Die function has a number prop called numSides.  
  return (
    <div>
      <Greeter person="Bill" from="Colt"/>
      <Greeter person="Ted" from="Colt"/>
      <Greeter person="Rosa" from="Elton"/>
      <Chicken numSides/>
      <Chicken />
      <Chicken />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} />
      <ListPicker values = {[1, 2, 3]} /> 
      <ListPicker values = {["a", "b", "c"]} /> 
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <Heading color="mageta" text="Welcome!" />
      <Heading color="teal" text="Blah!" />
      <ColorList colors = {["red", "pink", "purple", "teal"]} />
      <ColorList colors = {["olive", "orangered", "slategrey"]} />
      <Slots val1="cherry" val2="cherry" val3="cherry" />
      <Slots val1="cherry" val2="banana" val3="cherry" />
    </div>
  )
}

export default App
