import React from 'react';
import Calculadora from './components/Calculadora/'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 className='title'>Calculadora</h2>
      <div className='display'>
        <Calculadora />
      </div>
    </div>
  );
}

export default App;
