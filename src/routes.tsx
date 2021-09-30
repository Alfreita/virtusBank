import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateUser from "./pages/createUser";
import Deposit from "./pages/deposit";
import GetCash from "./pages/getcash";
import Login from "./pages/login/login";
import Profile from "./pages/profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/createAccount" exact component={CreateUser} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/deposit" exact component={Deposit} />
        <Route path="/getcash" exact component={GetCash} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
