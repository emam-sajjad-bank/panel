import Styled from 'styled-components';
 
const Style = Styled.div`
.upload{
    display: flex;
    flex-direction: column;
    border: 2px dashed #ccc;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1vw;
    text-align:center;
    cursor: pointer;
    min-height:150px;
    svg{
        width: 50px;
        height: 50px;
    }
    img{
        width: 100%;
        border-radius: 7px;
    }
    .svg-box{
        padding-bottom:5%;
    }
    .file-data{
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background: rgba(119, 119, 119, 0.2);
        padding: 1% 5%;
    }
    input[type=file]{
        width: 100%;
        height: 140px;
        position: absolute;
        opacity: 0;
        z-index: 20;
    }
}

`;
export default Style;