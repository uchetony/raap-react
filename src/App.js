import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
