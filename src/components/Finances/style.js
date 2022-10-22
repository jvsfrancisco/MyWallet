import styled from "styled-components";

const Main = styled.main`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    form {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        width: 90vw;
    }

    button {
        margin: 5px 0px;
        display: flex;
        align-items: center;  
        justify-content: center;
    }
`;

export default Main;