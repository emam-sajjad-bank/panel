//node modules
import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import SideBar from "./sideBar";
import { useHistory } from "react-router";

//components

//utils

//styles

const MainHOC = ({ children }) => {
  const history = useHistory();
  
  return (
    <>
      {
        history.location.pathname === "/login" ?
          null :
          <>
            <Header />
            <SideBar />
          </>
      }

      {children}
    </>
  );
};

MainHOC.propTypes = {
  children: PropTypes.any,
};

export default MainHOC;
