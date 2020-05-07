import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './routes/routes';
import Header from './components/Header/Header';
import Main from './views/Main/Main';
import NewItem from './views/NewItem/NewItem';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import { MyAccount } from './views/MyAccount/MyAccount';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROUTES.MAIN} component={Main} />
          <Route path={ROUTES.NEW_ITEM} component={NewItem} />
          <Route path={ROUTES.ACCOUNT_LOGIN} component={Login} />
          <Route path={ROUTES.ACCOUNT_REGISTER} component={Register} />
          <Route path={ROUTES.ACCOUNT_MY_ACCOUNT} component={MyAccount} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
