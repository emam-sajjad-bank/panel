//node modules
import React from "react";
import PropTypes from "prop-types";
import { Router, Route } from "react-router-dom";

//utils
import history from "./history";

//pages
import LoginPage from "../pages/login";
import Users from "../pages/users";

//styles

const MainRouter = () => {
  return (
    <Router history={history}>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/">
        <Users />
      </Route>
    </Router>
  );
};

MainRouter.propTypes = {
  data: PropTypes.any,
};

export default MainRouter;
