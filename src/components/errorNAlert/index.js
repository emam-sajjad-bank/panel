//node modules
import PropTypes from 'prop-types';
//components
import { notification } from 'antd';
//utils

//styles
 
const ErrorAndAlert = data =>{
  const {message , type , description} = data;
  const config = {
    placement: 'bottomRight',
    duration: 3,
    message:message,
    description:description,
    rtl: true,
    style: {
      border:  `1px solid ${type === "error" ? "var(--error-color)" : "var(--currect-color)"}` 
    },
  };
  type === "error" ?
    notification.error(config) :
    notification.success(config);
};

ErrorAndAlert.propTypes = {
  data: PropTypes.any
};

export default ErrorAndAlert;