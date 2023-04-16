import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loader from './components/Loader';

const LazyTask = lazy(() => import('#/containers/Task'));
const LazyNotFound = lazy(() => import('#/containers/NotFound'));

const Routes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader show />}>
        <Switch>
          <Route exact path="/" component={LazyTask} />
          <Route path="*" component={LazyNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
