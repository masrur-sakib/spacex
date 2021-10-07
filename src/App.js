import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        {/* Header */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* Footer */}
      </Router>
    </div>
  );
}

export default App;
