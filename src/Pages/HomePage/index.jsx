import { NavBar } from "../../Components/NavBar"
import { Header } from "../../Components/Header"
import { MainHomePage } from "./style"

export const HomePage = () => {
    return (
        <>
            <MainHomePage>
            <NavBar/> 
            <Header/>
                <h4>Que pena! Estamos em desenvolvimento :(</h4>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </MainHomePage>
        </>
    )
}