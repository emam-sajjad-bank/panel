import React from 'react';
import { Tag, Tooltip } from "antd";
import EditAccountAndLoan from './editAccount';
import CreateAndEditLoan from './createAndEditLoan';
import DeleteLoan from './deleteLoan';
import { StyledColActions } from './style';
import PaymentModal from './payment';


const columns = (setRefreshFlag , options) => [
  {
    title: 'موجودی',
    dataIndex: 'budge',
    key: 'budge',
    render: key =>{

      return(
        <Tooltip placement="top" title={(key/10).toLocaleString() + " تومان "}>
          {key.toLocaleString() + " ريال "}
        </Tooltip>
      );
    } ,
  },
  {
    title: 'شماره کارت',
    dataIndex: 'card',
    key: 'card',
  },

  {
    title: 'وام فعال',
    dataIndex: 'current_loan',
    key: 'current_loan',
    render: key => key ?
      <Tag color="red">دارد</Tag>:
      <Tag color="green">ندارد</Tag>,
  },
  {
    title: 'مبلغ وام',
    dataIndex: 'current_loan',
    key: 'current_loan',
    render: key => key ? 
      key.total_amount.toLocaleString() + " ريال " :
      0,
  },
  {
    title: 'مبلغ تسویه شده',
    dataIndex: 'current_loan',
    key: 'current_loan',
    render: key => key ? 
      key.payed_amount.toLocaleString() + " ريال " :
      0,
  },
  {
    title: 'مبلغ باقی مانده ',
    dataIndex: 'current_loan',
    key: 'current_loan',
    render: key => key ? 
      (key.total_amount - key.payed_amount).toLocaleString() + " ريال " :
      0,
  },
  {
    title: 'عملیات',
    dataIndex: 'edit_Action',
    key: 'edit_Action',
    render : (text  ,account) => {
      return (
        <StyledColActions>

          <EditAccountAndLoan 
            account={account} 
            setRefreshFlag={setRefreshFlag}
          />
          {account.current_loan ?
            <DeleteLoan 
              loan={account.current_loan}
              setRefreshFlag={setRefreshFlag}
            /> :
            <CreateAndEditLoan 
              account={account} 
              setRefreshFlag={setRefreshFlag}
              option={options.LOAN_AMOUNT}
            />
          }
          <PaymentModal 
            setRefreshFlag={setRefreshFlag}
            account={account}
            option={options.BUDGE_MONTHLY_INCREASE}
          />
        </StyledColActions>

      );}
  }
];


export default columns;