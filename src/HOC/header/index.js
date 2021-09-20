import React from "react";
import {MenuOutlined} from '@ant-design/icons';

import Navbar from "./navBar";
import { StyledHeader } from "./style";

const Header = ({setMenuIsActive}) => {
  return (
    <StyledHeader>
      <div onClick={()=>setMenuIsActive(true)}>
        <MenuOutlined />
      </div>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
