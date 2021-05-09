import React from 'react';
import PropTypes from 'prop-types';
import {Style} from './style';
 
const CustomSection = ({children , actions , title , fullWidth ,zeroPadding}) =>{
  return(
    <Style>
      <header className="header">
        <div className="section-title">
          {title}
        </div>
        <div className="actions">
          {actions}
        </div>
      </header>
      <main className={
        "main"+
        (fullWidth ? " full-width" :"")+
        (zeroPadding ? "" : " padding")
      }>
        {children}
      </main>

    </Style>
  );
};
 
CustomSection.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.any,
  title: PropTypes.any,
  fullWidth: PropTypes.bool,
  zeroPadding: PropTypes.bool,
};
 
export default CustomSection;