import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../pages/Search';
import User from '../pages/User';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/user" component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
