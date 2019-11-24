import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import StartReview from "./views/landing";
import { history } from "./routing/history";
import NotFound from "./views/NotFound";
import Login from "./views/user/Login";
import PrivateRoute from "./routing/PrivateRoute";
import CardIndex from "./views/card/list";
import CategoryIndex from "./views/category/list";

const App = () => {
  return (
    <Router history={history} basename={"/"}>
      <Switch>
        <Route exact path={"/"} component={Login} />
        <Route exact path={"/login"} component={Login} />
        <PrivateRoute exact path={"/card"} component={CardIndex} />
        <PrivateRoute path={"/card/:categoryId"} component={CardIndex} />
        <PrivateRoute exact path={"/category"} component={CategoryIndex} />
        <PrivateRoute exact path={"/review"} component={StartReview} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
