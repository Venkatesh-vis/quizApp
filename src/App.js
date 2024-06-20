import { useState } from 'react';
import './App.css';
import GameUI from './Components/GameUI/gameui';
import LandingPage from './Components/LandingPage/landingpage';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {gameStarted ? <GameUI /> : <LandingPage startGame={startGame} />}
    </div>
  );
}

export default App;
