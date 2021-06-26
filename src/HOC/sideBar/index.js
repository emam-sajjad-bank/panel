//node modules
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//components

//utils

//styles
import { StyledSideBar } from './style';



const SideBar = () =>{
  return(
    <StyledSideBar>
      <div className="welcome">
        {"داود هبابی"}
        {" "}
        عزیز خوش آمدید
      </div> 
      <NavLink to="/" exact activeClassName="active">
      صفحه اصلی
      </NavLink>
      <NavLink to="/users" exact activeClassName="active">
      لیست کاربران
      </NavLink>
    </StyledSideBar>
  );
};
 
SideBar.propTypes = {
  data: PropTypes.any
};
 
export default SideBar;