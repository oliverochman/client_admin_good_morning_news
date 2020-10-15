import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Authenticate from "./Authenticate";
import Home from "./Home";

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);
  return (
    <>
      <Switch>
        <Route exact path="/">
          {authenticated ? <Redirect to="/Home" /> : <Authenticate/>}
        </Route>
        <Route exact path="/Home">
          {authenticated ? <Home /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </>
  );
};

export default App;
