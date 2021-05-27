import {React} from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// Style
import './App.scss';

// Pages
import Home from './pages/home';
import Model from './pages/model';
import Dashboard from "./pages/dashboard";


function App() {
  const imageDetails = {
    width: 900,
    height: 650,
  };

  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/model/:id'
                render={() => <Model imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/dashboard'
                component={Dashboard}
                render={() => <Dashboard />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
