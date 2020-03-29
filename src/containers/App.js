import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import NewItem from './NewItem/NewItem';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/item/new" component={NewItem} />
      <Route path="/account/login" component={SignIn} />
      <Route path="/account/create" component={SignUp} />
    </Router>
  );
}

export default App;
