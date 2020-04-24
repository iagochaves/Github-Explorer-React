import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dasboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Dasboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
