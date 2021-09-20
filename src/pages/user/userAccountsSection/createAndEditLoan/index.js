//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Space } from 'antd';
//components
import GlobalModal from '../../../../components/globalModal';
import ErrorAndAlert from '../../../../components/errorNAlert';
//utils
import { createLoanApi } from '../../../../utils/API/loans';
//styles
import { StyledForm } from './style';


const CreateAndEditLoan = ({account , setRefreshFlag ,option}) =>{
  const [closeFlag, setCloseFlag] = useState(false);
  const [form] = StyledForm.useForm();
  const addLoan = async values =>{
    try{
      await createLoanApi({...values , account:account._id});
      setRefreshFlag();
      ErrorAndAlert({message: "تغییرات با موفقیت ذخیره شد"});
      form.resetFields();
      setCloseFlag(!closeFlag);
    }catch(err){
      throw err;
    }
  };

  return(
    <GlobalModal
      modalIsOpen={closeFlag}
      modalProps={{
        okText: account.current_loan ? 
          "ویرایش" : 
          "افزودن",
        cancelText:"انصراف",
        title:(account.current_loan ? 
          "ویرایش" : 
          "افزودن") +
          " وام ",
        onOk : ()=>form.submit(),
      }}
      buttonProps={{
        text:(account.current_loan ? 
          "ویرایش" : 
          "افزودن") +
          " وام "
      }}
    >
      <h2>
        وام اصلی به مبلغ : {" "}
        {option &&  (option.value * 1 ).toLocaleString() }{" "}
        ريال
      </h2>
      <StyledForm
        form={form}
        onFinish={values=>addLoan(values)}
        initialValues={account.current_loan}
      >
        <StyledForm.Item
          name='duration'
          label="تعداد ماه"
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.List name="additional_loan">
          {(fields, { add }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space key={key} style={{ display: 'flex', margin:"2px 8px" }} align="baseline">
                  <StyledForm.Item
                    {...restField}
                    name={[name, 'amount']}
                    fieldKey={[fieldKey, 'amount']}
                    label="مبلغ"
                  >
                    <Input/>
                  </StyledForm.Item>
                  <StyledForm.Item
                    {...restField}
                    name={[name, 'purpose']}
                    fieldKey={[fieldKey, 'purpose']}
                    label="توضیحات"
                  >
                    <Input/>
                  </StyledForm.Item>
                </Space>
              ))}
              <StyledForm.Item>
                <Button type="dashed" onClick={() => add()} block>
                وام افزایشی
                </Button>
              </StyledForm.Item>
            </>
          )}
        </StyledForm.List>
        <StyledForm.Item >
        </StyledForm.Item>
      </StyledForm>

    </GlobalModal>
  );
};
 
CreateAndEditLoan.propTypes = {
  account: PropTypes.object,
  option: PropTypes.object,
  setRefreshFlag: PropTypes.func,
  accountId: PropTypes.string,
};
 
export default CreateAndEditLoan;