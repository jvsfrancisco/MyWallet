import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-family: "Saira Stencil One", cursive;
        color: #ffffff;
        font-size: 32px;
        line-height: 50px;
        margin: 95px 0px 24px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    button {
        background-color: var(--ligth-purple);
        border: none;
        width: 100%;
        height: 46px;
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 36px;
    }
    .correct {
        border-color: green;
    }
    .incorrect {
        border-color: red;
    }
`;
export default Main;