//node modules
import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import SideBar from "./sideBar";
import { useHistory } from "react-router";
import { StyledContainer } from "./style";

//components

//utils

//styles

const MainHOC = ({ children }) => {
  const history = useHistory();
  
  return (
    <>
      {
        history.location.pathname === "/login" ?
          <>{children}</> :
          <>
            <Header />
            <SideBar />
            <StyledContainer>
              {children}
            </StyledContainer>
          </>
      }
    </>
  );
};

MainHOC.propTypes = {
  children: PropTypes.any,
};

export default MainHOC;
