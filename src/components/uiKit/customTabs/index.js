import Styled from 'styled-components';
import { Tabs } from 'antd';
 
const CustomTabs = Styled(Tabs)`
&.ant-tabs{
    margin:-24px;
}
.ant-tabs-nav-list , .ant-tabs-nav{
    width:100% !important;
}
.ant-tabs-tab{
    margin: 0 !important;
    display: flex;
    justify-content: center;
    width: 50%;
    background-color: #e4eaf2;
    color: #798595;
    transition: 0.3s all;
    &.ant-tabs-tab-active{
        background-color: #fff !important;
        color: #1c8cf7 !important;
    }
}
`;
 
export {CustomTabs};