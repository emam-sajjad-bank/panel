import React from 'react';
import { 
  CheckOutlined ,
  CloseOutlined , 
  InfoCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';

const text = (type) => {
  switch(type){
  case 'verified':
    return "تایید شده";
  case 'unverified':
    return "تایید نشد";
  case 'pending' :
    return "در حال بررسی";
  case 'deactive' :
    return "غیر فعال";
  case 'active' :
    return "فعال";
  case  'paid' :
    return "پرداخت شده"; 
  case 'unpaid' :
    return "پرداخت نشده";
  case 'contradiction' :
    return "مغایرت";
  case 'increment' :
    return "افزایش";
  case 'decrement' :
    return "کاهش";
  case 'done' :
    return "واریز شده";
  case 'deleted' :
    return "حذف شده";
  case 'preview' :
    return "پیش نمایش";
  case 'rejected' :
    return "رد شده";
  default : 
    return "نا مشخص";
  }
};
const style = (type) =>{
  return(
    type === "verified"  ||
      type === "active"  ||
      type === "done"  ||
      type === "paid" ||
      type === "increment"
  ) ? {status : "success",
      icon: type=== "increment" ? 
        <ArrowUpOutlined /> : 
        <CheckOutlined />
    } :
    (
      type === "unverified"  ||
      type === "rejected"  ||
      type === "preview"  ||
      type === "deleted"  ||
      type === "unpaid"  ||
      type === "deactive" ||
      type === "decrement" 
    ) ? {status : "error" ,
        icon: type === "decrement" ? 
          <ArrowDownOutlined /> :
          <CloseOutlined />
      } :
      (
        type === "pending"  ||
        type === "contradiction"
      ) ? {status : "warning" ,
          icon:<InfoCircleOutlined />
        } :
        {status : "processing" ,
          icon:<InfoCircleOutlined />
        } 
  ;
};


export {text ,style };