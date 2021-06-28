//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {  Button, Input } from 'antd';
//components
import { CustomSection } from '../../../components/uiKit';
import ErrorAndAlert from '../../../components/errorNAlert';
//utils
import {editUserApi } from '../../../utils/API/users';
//styles
import { StyledForm } from './style';


const EditUserSection = ({userData}) =>{
  const [editLoading, setEditLoading] = useState(false);
  const [form] = StyledForm.useForm();



  const editUser = async values =>{
    setEditLoading(true);
    try{
      await editUserApi(userData._id , values);
      setEditLoading(false);
      ErrorAndAlert({message: "تغییرات با موفقیت ذخیره شد"});
    }catch(err){
      ErrorAndAlert({message:err.response.data.message ,type: "error"});
      setEditLoading(false);
    }
  };


  return(
    <CustomSection 
      title="ویرایش کاربر"
      fullWidth
    >
      {userData && 
      <StyledForm
        onFinish={values => editUser(values)}
        initialValues={userData}
        form={form}
      >
        <StyledForm.Item
          label="نام"
          name="first_name"
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          label="نام خانوادگی"
          name="last_name"
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="username"
          label="نام کاربری"
          rules={[{ required: true, message: 'وارد کردن این فیلد الزامی است' }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          label="شماره تماس"
          name="phone"
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          label="شماره شناسنامه"
          name="identity_code"
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          label="کد ملی"
          name="national_code"
        >
          <Input />
        </StyledForm.Item>
        <div />
        <Button 
          type="primary" 
          onClick={()=>form.submit()}
          loading={editLoading}
        >
            ویرایش
        </Button>
      </StyledForm>
      }
    </CustomSection>
  );
};
 
EditUserSection.propTypes = {
  userData: PropTypes.object
};
 
export default EditUserSection;