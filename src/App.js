import React from 'react';
import './App.css';
import Skill from './Skill';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Skill Tracker</h1>
      </header>
      <main>
        <Skill />
      </main>
    </div>
  );
}

export default App;
