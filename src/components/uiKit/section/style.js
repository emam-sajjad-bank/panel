import Styled from 'styled-components';
 
const Style = Styled.div`
    box-shadow:var(--box-shadow);
    border-radius: 5px;
    background-color: #ffffff;
    align-items: center;
    margin:20px 0;
    width:100%;

    header.header{    
        font-size: 16px;
        font-weight: 500;
        padding:18px 25px;
        border-bottom: 1px solid #e3e8ee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div.section-title {
            font-size: 2rem;
            font-weight:bold;
        }
        
        div.actions{
            display:flex;
            span{
                display: flex;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.79;
                letter-spacing: normal;
                text-align: right;
            }
        }
    }

    main.main{
        display: flex;
        &.padding{
            padding: 25px 0;
        }
        &.full-width{
            flex-direction: column;
        }
    }
    
`;
 
export {Style};