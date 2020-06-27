import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './pages/Dashboard'
import Header from "./components/Header";

const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
