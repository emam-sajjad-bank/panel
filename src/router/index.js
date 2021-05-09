//node modules
import React from "react";
import PropTypes from "prop-types";
import { Router, Route } from "react-router-dom";

//utils
import history from "./history";

//pages
import LoginPage from "../pages/login";

//styles

const MainRouter = () => {
  return (
    <Router history={history}>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Router>
  );
};

MainRouter.propTypes = {
  data: PropTypes.any,
};

export default MainRouter;
