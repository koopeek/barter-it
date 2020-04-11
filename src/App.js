import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './views/Main/Main';
import NewItem from './views/NewItem/NewItem';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/item/new" component={NewItem} />
        <Route path="/account/signin" component={SignIn} />
        <Route path="/account/signup" component={SignUp} />
      </Router>
    </Provider>
  );
}

export default App;
