import styled from "styled-components";

export const MainRegister = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    height: 100%;

    margin-top: 50px;
    margin: 10px;

    @media (min-width: 900px) {
        width: 1200px;
        margin: 0 auto;
        padding-left: 1rem;
        padding-right: 1rem;

        margin-top: 10px;
    }

`


export const SectionRegister = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;
    
    /* margin-top: 20px; */

    background-color: var(--color-grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;



    h2 {
        font-weight: 700;
        font-size: 18px;
        color: var(--color-white);
    }

    h4 {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-grey-1);
    }
`


export const DivLogo = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 100px;

    margin-bottom: 25px;
    margin-top: 25px;

    a {
        text-decoration: none;
        background: #212529;
        border-radius: 4px;
        border: none;
        width: 67px;
        height: 40px;
        color: var(--color-white);
        display: flex;
        align-items: center;
        justify-content: center;
    }

`