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

        margin-top: 0px;
    }

`

export const PrincipalSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
    }

    h2 {
        font-weight: 600;
        font-size: 16px;
        color: white;
    }

   ul {
    width: 100%;
    height: max-content;
    max-height: 500px;
    overflow-x: auto;
    
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    
    padding: 10px;

    background-color: #212529;
    border-radius: 4px;
   }

    li {
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #121214;
    
    padding: 10px;
    border-radius: 4px;
   }

   li > h4 {
    color: white;
    font-weight: 700;
    font-size: 14.21px;
   }

   span {
    display: flex;
    gap: 50px;
    align-items: center;
   }

   span > p {
    font-weight: 400;
    font-size: 12.182px;
    color: #868E96;
   }

   .btnEdit {
    width: 50px;
    height: 15px;
    font-size: 10px;
   }

   button {
    background: transparent;
    border: none;
    font-size: 25px;
    color: white;
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
   }

   button > img {
    width: 100%;
    height: 100%;
   }

 

`