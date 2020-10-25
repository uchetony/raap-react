import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} /> } />
      </Switch>
    </div>
  );
}

export default App;