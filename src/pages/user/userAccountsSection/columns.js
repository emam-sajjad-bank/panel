import React from 'react';
import { Tooltip } from "antd";


const columns = [
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
    dataIndex: 'hasLoan',
    key: 'hasLoan',
    render: key => key ? "دارد" : "ندارد",
  },
  {
    title: 'شناسه حساب',
    dataIndex: '_id',
    key: '_id',
  },
];


export default columns;