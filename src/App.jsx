import { useState } from 'react';
import './styles/App.css';
import Game from './components/Game';
import Settings from './components/Settings';

function App() {
  const [gameState, setGameState] = useState('menu'); // menu, playing, game_over
  const [settings, setSettings] = useState({
    maxNumber: 10,
    optionCount: 2,
    mode: 'bigger' // 'bigger' or 'smaller'
  });

  const handleStartGame = (mode) => {
    setSettings(prev => ({ ...prev, mode }));
    setGameState('playing');
  };

  return (
    <div className="app-container">
      {gameState === 'menu' && (
        <div className="menu-screen">
          <h1>Number Giants!</h1>
          <p>Pick a game:</p>
          <div className="menu-buttons">
            <button onClick={() => handleStartGame('bigger')}>Find the BIGGEST</button>
            <button onClick={() => handleStartGame('smaller')}>Find the SMALLEST</button>
          </div>
          <Settings settings={settings} setSettings={setSettings} />
        </div>
      )}

      {gameState === 'playing' && (
        <Game 
          settings={settings} 
          onExit={() => setGameState('menu')} 
        />
      )}
    </div>
  );
}

export default App;
