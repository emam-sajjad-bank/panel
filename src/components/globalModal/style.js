import Styled from 'styled-components';
import { Modal, Button } from 'antd';


const StyledButton= Styled(Button)`
    display:flex;
    align-items: center;
    &.ant-btn-primary{
        svg{
            fill: #fff !important;
            path{
                fill: #fff !important;
            }
        }
    }
    span.icon{
        font-size: 20px !important;
        margin: 0 5px;
    }
    svg{
        margin-left:5px;
        width:20px;
        transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &.ant-btn-link{
        padding:0;
        svg{
            margin-left:0 !important;
            width:auto !important;
            transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
    }

`;
const StyledModal =Styled(Modal)`
.ant-modal-header{
    padding: 28px 24px;
    border-bottom: 1px solid #ccd5e0 !important;
    display:flex;
    span{
        color: rgba(121, 133, 149, 0.5);
    }
}
.ant-modal-title{
    font-size: 14px;
    line-height: 28px !important;
}
.ant-modal-footer{
    display: flex;
    padding: 30px;
    border-top: 1px solid #ccd5e0 !important;
    justify-content: flex-end;
}
.ant-modal-footer button + button{
        margin-right:16px;
    }
`;
 
export {StyledButton , StyledModal};