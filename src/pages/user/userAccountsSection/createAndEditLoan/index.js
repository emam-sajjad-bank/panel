//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Space } from 'antd';
//components
import { InputMoney } from '../../../../components/uiKit';
import GlobalModal from '../../../../components/globalModal';
//utils

//styles
import { StyledForm } from './style';
import ErrorAndAlert from '../../../../components/errorNAlert';
import { createLoanApi, updateLoanApi } from '../../../../utils/API/loans';





const CreateAndEditLoan = ({loan , setRefreshFlag , accountId}) =>{
  const [closeFlag, setCloseFlag] = useState(false);
  const [form] = StyledForm.useForm();

  const addOrEditLoan = async valuse =>{

    try{
      if(loan) await updateLoanApi(loan.id , valuse);
      else await createLoanApi({...valuse , accountId:accountId});
      setRefreshFlag();
      ErrorAndAlert({message: "تغییرات با موفقیت ذخیره شد"});
      form.resetFields();
      setCloseFlag(!closeFlag);
    }catch(err){
      ErrorAndAlert({message:err.response.data.message ,type: "error"});
    }
  };

  return(
    <GlobalModal
      modalIsOpen={closeFlag}
      modalProps={{
        okText: loan ? 
          "ویرایش" : 
          "افزودن",
        cancelText:"انصراف",
        title:(loan ? 
          "ویرایش" : 
          "افزودن") +
          " وام ",
        onOk : ()=>form.submit(),
      }}
      buttonProps={{
        text:"وام"
      }}
    >
      <StyledForm
        form={form}
        onFinish={values=>addOrEditLoan(values)}
        initialValues={loan}
      >
        <StyledForm.List name="additional_loan">
          {(fields, { add }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <StyledForm.Item
                    {...restField}
                    name={[name, 'first']}
                    fieldKey={[fieldKey, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Input placeholder="First Name" />
                  </StyledForm.Item>
                  <StyledForm.Item
                    {...restField}
                    name={[name, 'last']}
                    fieldKey={[fieldKey, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Input placeholder="Last Name" />
                  </StyledForm.Item>
                </Space>
              ))}
              <StyledForm.Item>
                <Button type="dashed" onClick={() => add()} block>
                Add field
                </Button>
              </StyledForm.Item>
            </>
          )}
        </StyledForm.List>
      </StyledForm>

    </GlobalModal>
  );
};
 
CreateAndEditLoan.propTypes = {
  loan: PropTypes.object,
  setRefreshFlag: PropTypes.func,
  accountId: PropTypes.string,
};
 
export default CreateAndEditLoan;