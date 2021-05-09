import Styled from 'styled-components';
import {InputNumber, Tooltip} from 'antd';

const CustomInputNumber = Styled(InputNumber)`
position:relative;
&:after{
    content: "ريال";
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    width: 10%;
    text-align: center;
    justify-content: center;
}
`;
const CustomPopover = Styled(Tooltip)``;
 
export {CustomInputNumber , CustomPopover};