import Styled from 'styled-components';
 
const Style = Styled.div`
.multi-upload{
    display: flex;
    width: 100%;
    padding: 1vw;
    cursor: pointer;
    input[type=file]{
        display:none
    }
    svg{
        margin: auto 5px;
    }
}
.file-data{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1% 5%;
        flex-wrap: wrap;
        .svg-box{
        padding-bottom:5%;
        
        }
        svg{
            width: 50px;
            height: 50px;
        }
        & > div{
            display:flex;

            overflow: hidden;
            padding:10px;
            align-items: center;
            margin: 5px;
            border-radius: 3px;
            border: solid 1px #a8b4c3;
            background-color: #ffffff;
            button{
                border: none;
                display: flex;
                background: #ff4e4e;
                border-radius: 100px;
                justify-content: center;
                align-items: center;
                width: 18px;
                height: 18px;
                font-size: 1.2rem;
                color: #fff;
                line-height: 25px;
                margin-right:10px;
                        }
            span{
                max-width: 210px;
                white-space: nowrap;
            }
            img{
                width: 100%;
                max-width: 70px;
            }
        }
    }
`;
export default Style;