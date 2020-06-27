import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './pages/Dashboard'
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";

const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
