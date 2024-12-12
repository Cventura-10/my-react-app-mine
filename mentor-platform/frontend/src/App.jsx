import React from 'react';
import ModuleList from './components/ModuleList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Mentor Platform</h1>
      </header>
      <main>
        <ModuleList />
      </main>
    </div>
  );
}

export default App;
