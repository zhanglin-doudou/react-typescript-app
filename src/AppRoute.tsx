import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './pages/containers/About';
import Home from './pages/containers/Home';

export default function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
