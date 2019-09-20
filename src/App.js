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
      {/* React doesn't like it when I used the body html tag here, so I opted for
      a div instead. The className of "body" is there to indicate this is the main
      body of the app, even though it doesn't use the body tag. */}
      <div className="body">
      {/* Lets bring in those sweet, sweet routes. */}
      { routes }
      </div>
    </div>
  );
}

export default App;
