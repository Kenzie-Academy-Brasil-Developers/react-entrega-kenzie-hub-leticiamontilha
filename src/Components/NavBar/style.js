import styled from "styled-components";

export const BarraNav = styled.nav`
    display: flex;
    gap: 50px;

    @media (min-width: 700px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 25px;
    }
`