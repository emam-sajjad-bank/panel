//node modules
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {  Button, Input } from 'antd';
import { useHistory } from 'react-router';
//components
import MainHOC from '../../HOC';
import { CustomSection } from '../../components/uiKit';

//utils
import {editUserApi, getUserByIdApi} from '../../utils/API/users';
//styles
import { StyledForm } from './style';
import ErrorAndAlert from '../../components/errorNAlert';


const SingleUserPage = () =>{
  const [data, setData] = useState(null);
  const [editLoading, setEditLoading] = useState(false);
  const history = useHistory();
  const [form] = StyledForm.useForm();

  const editUser = async values =>{
    setEditLoading(true);
    try{
      await editUserApi(history.location.pathname.split("/")[2] , values);
      setEditLoading(false);
      ErrorAndAlert({message: "تغییرات با موفقیت ذخیره شد"});
    }catch(err){
      ErrorAndAlert({message:err.response.message ,type: "error"});
      setEditLoading(false);
    }

  };

  const getUserById = async ()=>{
    const res = await getUserByIdApi(history.location.pathname.split("/")[2]);
    setData(res.data.data);
  };

  useEffect(() => {
    getUserById();
  }, []);

  return(
    <MainHOC>
      <CustomSection 
        title="ویرایش کاربر"
        fullWidth
      >
        {data && 
          <StyledForm
            onFinish={values => editUser(values)}
            initialValues={data}
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
    </MainHOC>
  );
};
 
SingleUserPage.propTypes = {
  data: PropTypes.any
};
 
export default SingleUserPage;