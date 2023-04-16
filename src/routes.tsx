import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const LazyApp = lazy(() => import('#/containers/App'));
const LazyNotFound = lazy(() => import('#/containers/NotFound'));

const Routes: React.FC = () => {
  return (
    <Router>
      <Suspense>
        <Switch>
          <Route exact path="/" component={LazyApp} />
          <Route path="*" component={LazyNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
