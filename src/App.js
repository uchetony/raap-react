import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import PageNotFound from "./components/404/PageNotFound";

function App({ children }) {
  if (children) {
    return (
      <div className="App">
        {/* Application providers go here */}
        <BrowserRouter>{children}</BrowserRouter>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Application providers go here */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />
          <Route path="/404" render={() => <PageNotFound />} />
          <Route path="*" render={() => <Redirect to="/404" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
