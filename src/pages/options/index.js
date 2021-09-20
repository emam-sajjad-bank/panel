//node modules
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
//components
import { CustomSection, InputMoney } from '../../components/uiKit';
import ErrorAndAlert from '../../components/errorNAlert';
//utils
import { getOptionsApi, updateOptionsApi } from '../../utils/API/options';
//styles
import { StyledForm } from './style';



const OptionsPage = () =>{
  const [editLoading, setEditLoading] = useState(false);

  const [options, setOptions] = useState([]);

  const getOptions = async () =>{
      
    const res = await getOptionsApi();
    setOptions(res.data.data);
  };

  const editOptions = async values =>{
    setEditLoading(false);
    try{
      await updateOptionsApi(values);
      ErrorAndAlert({message: "تغییرات با موفقیت ذخیره شد"});
    }
    catch(err){
      setEditLoading(false);
      ErrorAndAlert({message:err.response.data.message ,type: "error"});
    }

  };


  useEffect(() => {
    getOptions();
  }, []);



  return(
    <CustomSection 
      title="تنظیمات"
      fullWidth
    >
      <>
        {options && 
      options.map(option=>(
        <StyledForm
          key={option._id}
          onFinish={values => editOptions({...option , ...values})}
          initialValues={option}
        >
          <StyledForm.Item
            label={option.name}
            name="value"
          >
            <InputMoney />
          </StyledForm.Item>
          <Button 
            type="primary" 
            htmlType="submit"
            loading={editLoading}
          >
            ویرایش
          </Button>
        </StyledForm>
      ))}
      </>
    </CustomSection>
  );
};
 
OptionsPage.propTypes = {
  data: PropTypes.any
};
 
export default OptionsPage;