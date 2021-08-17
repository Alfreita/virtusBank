import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
