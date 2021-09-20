//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
//components
import GlobalModal from '../../../../components/globalModal';
import { InputMoney } from '../../../../components/uiKit';
import ErrorAndAlert from '../../../../components/errorNAlert';
//utils
import { payBudgeApi, payLoanApi } from '../../../../utils/API/payment';
//styles
import { StyledForm } from './style';
import { useHistory } from 'react-router';







const PaymentModal = ({account , option , setRefreshFlag}) =>{
  const [closeFlag, setCloseFlag] = useState(false);
  const history = useHistory();
  const payBudge = async (values) =>{
    await payBudgeApi({...values , accountId : account._id ,userId : history.location.pathname.split("/")[2]});
    setRefreshFlag();
    ErrorAndAlert({message: "تغییرات با موفقیت ذخیره شد"});
  };

  const payLoan = async (values) =>{
    await payLoanApi({...values , loanId : account.current_loan._id ,userId : history.location.pathname.split("/")[2]});
    setRefreshFlag();
    ErrorAndAlert({message: "تغییرات با موفقیت ذخیره شد"});
  };

  return(
    <>
      <GlobalModal
        modalIsOpen={closeFlag}
        modalProps={{
          
          title:"پرداخت",
          footer: <Button onClick={()=>setCloseFlag(value=> !value)}>بستن</Button>
        }}
        buttonProps={{
          text:"پرداخت"
        }}
      >
        {option &&
              <StyledForm
              // form={form}
                onFinish={values=>payBudge(values)}
                initialValues={{payments :option.value}}
              >
                <StyledForm.Item
                  label="پرداخت پس انداز"
                  name="payments"
                  rules={[{ required: true, message: 'وارد کردن این فیلد الزامی است' }]}
                >
                  <InputMoney />
                </StyledForm.Item>
                <Button htmlType="submit">
                    پرداخت
                </Button>
              </StyledForm>
        }
        {account.current_loan && 

        <StyledForm
        // form={form}
          onFinish={values=>payLoan(values)}
          initialValues={{payments :Math.ceil(account.current_loan.total_amount / account.current_loan.duration)}}
        >
          <StyledForm.Item
            label="باز پرداخت وام"
            name="payments"
            rules={[{ required: true, message: 'وارد کردن این فیلد الزامی است' }]}
          >
            <InputMoney />
          </StyledForm.Item>
          <Button htmlType="submit">
                    پرداخت
          </Button>
        </StyledForm>
        }
      </GlobalModal>
    </>
  );
};
PaymentModal.propTypes = {
  account: PropTypes.object,
  option: PropTypes.object,
  setRefreshFlag: PropTypes.func,
};

export default PaymentModal;