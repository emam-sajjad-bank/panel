import React from 'react';
import Style from './style';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const SpinBox = () => {
  return(
    <Style>
      <Spin size="large" indicator={<LoadingOutlined spin />} />
    </Style>
  );
};

export default SpinBox;