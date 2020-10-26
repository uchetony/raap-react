import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Dashboard from './components/dashboard/Dashboard';
import PageNotFound from './components/404/PageNotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} /> } />
        <Route path="/404" render={() => <PageNotFound /> } />
        <Route path="*" render={() => <Redirect to="/404" /> } />
      </Switch>
    </div>
  );
}

export default App;