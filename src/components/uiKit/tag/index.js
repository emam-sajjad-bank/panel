import React from 'react';
import PropTypes from 'prop-types';
import { text , style} from './dataFarm';
import CustomTag from './customTag';

const Badge = ({type}) => {
  return(
    <CustomTag 
      icon={style(type).icon}
      color={style(type).status}
    >
      {text(type)}      
    </CustomTag>
  );
};


Badge.propTypes = {
  type: PropTypes.string
};

export default Badge;