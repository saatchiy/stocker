import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import Home from '../../views/Home';
import Algorithms from '../../views/Algorithms';
import Settings from '../../views/Settings';
import { history } from '../../redux/store';

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/algortithms" component={Algorithms} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
