import { NavBar } from "../../Components/NavBar"
import { Header } from "../../Components/Header"
import { MainHomePage, PrincipalSection } from "./style"
import Lixo from "../../Assets/img/lixo.png"
import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { ModalAddTech, ModalEditTech } from "../../Components/Modal"

export const HomePage = () => {

    const { user, modalAdd, setModalAdd, modalEdit, setModalEdit } = useContext(UserContext)

    return (
        <>
        { user ? (
            <MainHomePage>
            <NavBar /> 
            <Header />
            <PrincipalSection>
                <div>
                    <h2>Tecnologias</h2>
                    <button onClick={() => setModalAdd(true)}>+</button>
                </div>
              <ul>
                { user.techs.map((elem) => {
                    return (
                        <li key={elem.id}>
                            <h4>{elem.title}</h4>
                            <span>
                                <p>{elem.status}</p>
                                <button  onClick={() => setModalEdit(true)}>
                                    <img src={Lixo} alt="botão excluir" />
                                </button>
                            </span>
                        </li>
                    )
                    })}
                </ul>
            </PrincipalSection>
            { modalAdd && <ModalAddTech/>}
            { modalEdit && <ModalEditTech/>}
            </MainHomePage>
        ) : ( <h2>Carregando</h2>)}
        </>
    ) 
}