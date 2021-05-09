import Styled from 'styled-components';
import { Button } from 'antd';


const StyledButton = Styled(Button)`
    display: flex;
    padding: 2rem 3rem;
    cursor: pointer;
    position: relative;
    width: 100%;
    min-width: var(--min-width);
    align-items: center;
    justify-content: center;
    border: none;
    overflow:hidden;
    &.ant-btn-primary{
        background:var(--ESB-Pink);
        color:var(--ESB-White2);
    }
    span{
        z-index:3;
        position:relative;
    }
    &::before{
        content:"";
        display:block;
        position:absolute;
        top:0;
        left:0;
        right:auto;
        width:0;
        height:0;
        top:50%;
        left:50%;
        z-index:1;
        transition:0.3s all;
        box-shadow:none;
        background: rgb(0 0 0 / 30%);
    }
    &:hover{
        &::before{
            top:-50%;
            left:-50%;
            width:200%;
            height:200%;
        }
    }
`;
 
export {StyledButton};