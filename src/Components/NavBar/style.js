import styled from "styled-components";

export const BarraNav = styled.nav`
    display: flex;
    gap: 50px;


    button {
        background: #212529;
        border-radius: 4px;
        border: none;
        width: 67px;
        height: 40px;

        color: var(--color-white); 
    }

    @media (min-width: 700px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 25px;
    }
`