import React from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Wizard />
      <Dashboard />
    </div>
  );
}

export default App;
