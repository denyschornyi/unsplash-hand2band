import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";

import { Results } from "../../pages/Results/Results";
import { Main } from "../../pages/Main/Main";

export function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
