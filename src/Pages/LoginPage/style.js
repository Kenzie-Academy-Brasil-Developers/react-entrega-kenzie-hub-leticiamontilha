import styled from "styled-components";

export const MainLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    margin-top: 80px;

    @media (min-width: 900px) {
        width: 1200px;
        margin: 0 auto;
        padding-left: 1rem;
        padding-right: 1rem;

        margin-top: 100px;
    }
`

export const SectionLogin = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;
    
    margin-top: 20px;

    background-color: var(--color-grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;


    h2 {
        color: var(--color-white);

        font-weight: 400;
        font-size: 18px;
    }

    p {
        font-weight: 500;
        font-size: 12px;
        color: var(--color-grey-1);
    }

      /* 

    @media (min-width: 900px) {
        width: 300px;
        height: 450px;
        margin-top: 10px;
    }; */
`