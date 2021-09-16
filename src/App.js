import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Country from "./components/countries";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/:countryName">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
