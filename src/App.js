import './App.css';
import { useState } from 'react'
function App() {
  
  const [started, setStarted] = useState(false)
  
  return (
    <div className="App">
      {!started ? 
        <button onClick={() => setStarted(true)}>Start</button>
        :
        <p>Game</p>
      }
    </div>
  );
}

export default App;
