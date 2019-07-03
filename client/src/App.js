import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Twitter React</h3>
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path='/' component={ Landing } />
          </Switch>
        </Router>
      </main> 
    </div>
  );
}

export default App;
