import './App.css';
import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';
import ScoreKeeper2 from './ScoreKeeper2';

function App() {

  return (
    <div>
      <h1>State Demo</h1>
      <Counter />
      <Dumbo />
      <ScoreKeeper />
      <EmojiClicker />
      <ScoreKeeper2 numPlayers={10} target={3} />
    </div>
  )
}

export default App
