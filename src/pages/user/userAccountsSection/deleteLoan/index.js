//node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

//components

//utils
import { deleteLoanApi } from '../../../../utils/API/loans';
//styles

const DeleteLoan = ({loan , setRefreshFlag}) =>{

  const deleteLoan = async() =>{
    await deleteLoanApi(loan._id);
    setRefreshFlag();
  };

  return(
    <>
      <Button onClick={deleteLoan}>
        حدف وام
      </Button>
    </>
  );
};
DeleteLoan.propTypes = {
  loan: PropTypes.object,
  setRefreshFlag: PropTypes.func,
  
};

export default DeleteLoan;