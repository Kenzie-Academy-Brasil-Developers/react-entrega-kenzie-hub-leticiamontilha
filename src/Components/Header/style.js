import styled from "styled-components";

export const HeaderPage = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px;

    width: 100vw;
    height: max-content;

    margin-top: 15px;
    
    div {
        border-top: 1px solid var(--color-grey-3);
        border-bottom: 1px solid var(--color-grey-3);
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    span {
        width: 1100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    span > h2 {
        font-weight: 700;
        font-size: 18px;
        color: var(--color-white);
    }

    span > p {
        font-weight: 500;
        font-size: 12px;
        color: var(--color-grey-2);
    }

    @media (min-width: 900px) {
        div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        }

        span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        }

        
    }

`

