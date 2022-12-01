import styled from "styled-components";

export const InputType = styled.input`
    width: 235px;
    height: 48px;

    background: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-1);
    border-radius: 4px;


    &::placeholder{
        color: var(--color-grey-1);
        padding: 5px;
        font-size: 10px;
    }

    &:focus{
       border: 1px solid var(--color-white);
    }

`
export const InputTypeSelect = styled.select`
    width: 235px;
    height: 48px;

    background: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-1);
    border-radius: 4px;

    color: var(--color-grey-1);

    &:focus{
       border: 1px solid var(--color-white);
    }

`

export const OptionSelect = styled.option`
    color: var(--color-white);
`

export const LabelInput = styled.label`
    font-weight: 400;
    font-size: 12.182px;
    color: var(--color-white);

`