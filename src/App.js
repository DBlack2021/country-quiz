import './App.css';
import { useState } from 'react'
import StartMenu from './components/StartMenu';
import Game from './components/Game';

function App() {
  const [started, setStarted] = useState(false)
  const [numQuestions, setNumQuestions] = useState(1);

  return (
    <div className="App">
      {!started ? 
        <StartMenu setStarted={setStarted} setNumQuestions={setNumQuestions} />
        :
        <Game numQuestions={numQuestions} />
      }
    </div>
  );
}

export default App;
