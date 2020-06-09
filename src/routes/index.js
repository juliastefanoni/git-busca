import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../pages/Search';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
