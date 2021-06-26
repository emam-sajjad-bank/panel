import React from "react";
import { CustomButton } from "../../../components/uiKit";
import logout from "../../../utils/logout";

import { StyledNavbar } from "./style";

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <span />
        <CustomButton
          onClick={logout}
          to="/" className="nav-link p-1">
          <span className="md:inline-block hidden">خروج</span>
        </CustomButton>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
