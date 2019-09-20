import React from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import Header from './components/Header/Header'
import routes from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
      {/* Lets bring in those sweet, sweet routes. */}
      { routes }
      </body>
    </div>
  );
}

export default App;
