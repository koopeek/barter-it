import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import ROUTES from './global/routes';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import NewItem from './pages/NewItem/NewItem';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { MyAccountPage } from './pages/MyAccountPage/MyAccountPage';

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
          <Route path={ROUTES.ACCOUNT_MY_ACCOUNT} component={MyAccountPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
