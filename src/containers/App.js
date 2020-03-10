import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import NewProduct from './NewProduct/NewProduct';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/new_product" component={NewProduct} />
    </Router>
  );
}

export default App;
