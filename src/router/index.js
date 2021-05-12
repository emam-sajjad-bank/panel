//node modules
import React from "react";
import PropTypes from "prop-types";
import { Router, Route } from "react-router-dom";

//utils
import history from "./history";

//pages
import LoginPage from "../pages/login";
import Users from "../pages/users";
import PrivetRoute from "./privetRoute";

//styles

const MainRouter = () => {
  return (
    <Router history={history}>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/users">
        <PrivetRoute>
          <Users />
        </PrivetRoute>
      </Route>
      <Route exact path="*">
        <PrivetRoute />
      </Route>
    </Router>
  );
};

MainRouter.propTypes = {
  data: PropTypes.any,
};

export default MainRouter;
