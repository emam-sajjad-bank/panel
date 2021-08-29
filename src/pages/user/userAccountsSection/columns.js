import React from 'react';
import { Tag, Tooltip } from "antd";
import EditAccountAndLoan from './editAccount';
import CreateAndEditLoan from './createAndEditLoan';
import { StyledColActions } from './style';


const columns = setRefreshFlag => [
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
    title: 'شناسه حساب',
    dataIndex: '_id',
    key: '_id',
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
          <CreateAndEditLoan 
            account={account} 
            setRefreshFlag={setRefreshFlag}
          />
        </StyledColActions>
      );}
  }
];


export default columns;