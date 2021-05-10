import React from "react";
import Navbar from "./Navbar";
import { HeaderStyle, Style } from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <Style>
        <Navbar />
      </Style>
    </HeaderStyle>
  );
};

export default Header;
