import Styled from "styled-components";

const AsideStyle = Styled.aside`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:#333;
    width:300px;
    
`;

const MainStyle = Styled.main`
    margin-right:300px;
    padding:20px
`;

const StyleUl = Styled.ul`
    padding-left:10px;
    padding-right:10px;
    padding-top:32px;
    padding-bottom:32px;
`;

const SidbarTogglerStyle = Styled.div`
    padding:10px;
    background-color:#444;
`;

export { AsideStyle, MainStyle, SidbarTogglerStyle, StyleUl };
