import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/login";
import CreateUser from "./pages/createUser";
import Profile from "./pages/profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/createAccount" exact component={CreateUser} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
