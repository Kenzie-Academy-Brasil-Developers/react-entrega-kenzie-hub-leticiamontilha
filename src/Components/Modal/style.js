import styled from "styled-components";

export const Modal = styled.div`
position: absolute;
width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: rgba(0, 0, 0, 0.50);


div {
    width: 100%;
    background-color: var(--color-grey-2);
    color: var(--color-white);
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius:  4px 4px 0px 0px;
}

@media (min-width: 900px) {
    div {
        width: 30%;
    }
}

div > button {
    background: transparent;
    border: none;
    color: var(--color-white);
    font-size: 12px;
}


`
export const FormModal = styled.form`

width: 100%;
height: max-content;
max-height: 350px;

@media (min-width: 900px) {
    width: 30%;
}

background-color: red;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 10px;

padding: 10px 50px 10px 50px;

background-color: var(--color-grey-3);
box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
border-radius: 0px 0px 4px 4px;

label {
    color: var(--color-white);
    font-weight: 400;
    font-size: 12px;
}

input, select {
    width: 95%;
    height: 48px;
    padding: 5px;
    background: #343B41;
    color: var(--color-white);
    border: 1.2182px solid #F8F9FA;
    border-radius: 4px;
}

input::placeholder {
    color:var(--color-white);
}

.btn, .btnSalvar {
    width: 95%;
    height: 48px;
    background: #FF577F;
    border: 2px solid #FF577F;
    border-radius: 4.06066px;
    color: var(--color-white);
}

button {
    width: 95%;
    height: 48px;
    background: #868E96;
    border: 1.2182px solid #868E96;
    border-radius: 4px;
}


`

