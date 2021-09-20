//node modules
import React, { useState } from "react";
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

  const [menuIsActive, setMenuIsActive] = useState(false);
  
  return (
    <>
      {
        history.location.pathname === "/login" ?
          <>{children}</> :
          <>
            <Header setMenuIsActive={setMenuIsActive} />
            <SideBar menuIsActive={menuIsActive} />
            <StyledContainer>
              <div>
                {children}
              </div>
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
