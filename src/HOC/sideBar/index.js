//node modules
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//components

//utils

//styles
import { StyledSideBar } from './style';



const SideBar = ({menuIsActive}) =>{
  return(
    <StyledSideBar menuIsActive={menuIsActive}>
      <div className="welcome">
        {/* {"داود هبابی"} */}
        {" "}
         خوش آمدید
      </div> 
      <NavLink to="/" exact activeClassName="active">
      صفحه اصلی
      </NavLink>
      <NavLink to="/users" exact activeClassName="active">
      لیست کاربران
      </NavLink>
      <NavLink to="/options" exact activeClassName="active">
      لیست تنظیمات
      </NavLink>
    </StyledSideBar>
  );
};
 
SideBar.propTypes = {
  menuIsActive: PropTypes.bool
};
 
export default SideBar;