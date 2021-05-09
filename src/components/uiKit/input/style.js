import Styled from 'styled-components';
import {Input} from 'antd';

const StyledInput = Styled(Input)`
    direction:${props => props.align };
    padding: 2rem 3rem;
    background: var(--pure-white);
    width: 100%;
    min-width:var(--min-width);
    color: var(--ESB-Font2);
    text-align:${props => props.align==="rtl" ? "right" : "left"};
    display: flex;
    flex-direction:${props => props.align==="rtl" ? "row" : "row-reverse"} ;
    &:hover{
      border-color: #ff006f;
    }
      &:focus {
        border-color: #ff006f;
        box-shadow: 0 0 0 2px rgb(255 0 111 / 0.1);
      }
    .ant-input-suffix{
      color :${props=>props.value === 0 ? "color: var(--ESB-Font2);" : "color: var(--ESB-Font);"}
    }
    .ant-input:focus, input.ant-input-focused{
      border:none;
    }
`;
 
export {StyledInput};