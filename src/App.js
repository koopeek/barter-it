import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import ROUTES from './global/routes';
import { HeaderContainer } from './containers/HeaderContainer';
import { MainPage } from './pages/MainPage/MainPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { MyAccountPage } from './pages/MyAccountPage/MyAccountPage';
import { NewItemPage } from './pages/NewItemPage/NewItemPage';
import { ItemPage } from './pages/ItemPage/ItemPage';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderContainer />
        <Switch>
          <Route exact path={ROUTES.MAIN} component={MainPage} />
          <Route path={ROUTES.NEW_ITEM} component={NewItemPage} />
          <Route path={ROUTES.ACCOUNT_LOGIN} component={LoginPage} />
          <Route path={ROUTES.ACCOUNT_REGISTER} component={RegisterPage} />
          <Route path={ROUTES.ACCOUNT_MY_ACCOUNT} component={MyAccountPage} />
          <Route path={`${ROUTES.ITEM_VIEW}/:id`} component={ItemPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
