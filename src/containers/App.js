import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import NewItem from './NewItem/NewItem';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/przedmiot/nowy" component={NewItem} />
    </Router>
  );
}

export default App;
