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
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        height: 80px;
    }

    div > h2 {
        font-weight: 700;
        font-size: 18px;
        color: var(--color-white);
    }

    div > p {
        font-weight: 500;
        font-size: 12px;
        color: var(--color-grey-2);
    }

    @media (min-width: 900px) {
        div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
    }

        
    }

`