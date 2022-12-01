import styled from "styled-components";

export const MainHomePage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    margin-top: 80px;

    div {
        padding: 15px;
        width: 100%;
        text-align: center;
    }

    div > h4 {
        font-weight: 500;
        font-size: 18px;
        color: var(--color-white);
    }

    div > p {
        font-weight: 100;
        font-size: 16px;
        color: var(--color-white);
    }
    

    @media (min-width: 900px) {
        width: 1200px;
        margin: 0 auto;
        padding-left: 1rem;
        padding-right: 1rem;

        margin-top: 100px;
    }

`