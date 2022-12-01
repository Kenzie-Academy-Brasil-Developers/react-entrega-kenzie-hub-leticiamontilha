import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 5px;

    width: 80vw;
    max-width: 300px;

   div {
    display: flex;
    align-items: center;
   }

   div > img {
    width: 5%;
    height: 5%;
    /* position: absolute;
    right: 610px; */
   }

   button {
    width: 239px;
    height: 48px;
    background: #59323F;
    border: 2px solid #59323F;
    border-radius: 4px;
    color: var(--color-white);

    margin-top: 5px;

    &:hover {
        background-color: var(--color-primary);
    }
   }
`

export const ErrorMessage = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: var(--feedback-negative);

`