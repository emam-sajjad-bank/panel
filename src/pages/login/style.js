import Styled from 'styled-components';

const Style = Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    overflow:hidden;
    padding:0;
    margin:0;
    &::after{
        content: "";
        width: 4000px;
        height: 4000px;
        background:#ffffff;
        position: absolute;
        z-index: -1;
        right: 0;
        top: 5vw;
        transform: rotate(33deg);
    }
`;

const LoginBox = Styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 50vh;
    max-width: 400px;
    max-height: 400px;
    background: var(--ESB-white1);
    box-shadow: var(--main-box-shadow);
    padding: 5rem 2rem;
    justify-content: space-evenly;
    border-radius: 1rem;
    svg{
        display: block;
        margin: auto;
        width: 100px;
        height: 35px;
    }
`;


export {LoginBox , Style};
