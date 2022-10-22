import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;

    article{
        overflow-x: scroll;
        &::-webkit-scrollbar {
        display: none;
        
    }
}

    aside {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 78px;
    }
    aside svg {
        font-size: 25px;
    }
    section {
        margin-bottom: 13px;
        padding: 23px 12px;
        height: calc(100vh - 225px);
        background-color: #ffffff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    section.empty {
        justify-content: center;
        align-items: center;
        padding: 0px 73px;
    }
    .empty p {
        font-size: 20px;
        line-height: 23px;
        color: var(--grey);
        text-align: center;
    }
    .total_value {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 700;
    }
    section > p span {
        color: var(--${(props) => props.color});
        font-weight: 400;
    }
    div {
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }
    div > a {
        width: 100%;
    }
    div button {
        height: 114px;
        font-size: 17px;
        margin: 0;
        max-width: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 10px;
    }
    div button svg {
        font-size: 25px;
    }
    div button p {
        width: 64px;
        text-align: initial;
    }
    .loading{
        align-self: center;
        justify-self: center;
        height: 100vh;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
`;


export default Main ;

