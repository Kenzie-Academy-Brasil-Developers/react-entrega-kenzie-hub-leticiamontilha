import styled from "styled-components";

export const ButtonEntrada = styled.button`
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 5px;

    width: 235px;
    height: 48px;

    color: var(--color-white);

`

export const ButtonCadastro= styled.a`
    width: 235px;
    height: 48px;

    border-radius: 5px;
    border: 2px solid var(--color-grey-1);
    background-color: var(--color-grey-1);
    color: var(--color-white);

    &:hover{
        background-color: var(--color-grey-2);
        border: 2px solid var(--color-grey-2);
    }

`

export const ButtonVolta = styled.button`
    background: #212529;
    border-radius: 4px;
    border: none;
    width: 67px;
    height: 40px;

    color: var(--color-white);
    
`