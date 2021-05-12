import React from "react";
import { CustomButton } from "../../../components/uiKit";

const Navbar = () => {
  return (
    <>
      <nav>
        <CustomButton to="/" className="nav-link p-1">
          <span className="md:inline-block hidden">خروج</span>
        </CustomButton>
      </nav>
    </>
  );
};

export default Navbar;
