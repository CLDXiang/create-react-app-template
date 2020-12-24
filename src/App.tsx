import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Home from './pages/Home';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={routes.Home}>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
