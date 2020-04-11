import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './assets/routes';
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
        <Switch>
          <Route exact path={ROUTES.MAIN} component={Main} />
          <Route path={ROUTES.NEW_ITEM} component={NewItem} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
