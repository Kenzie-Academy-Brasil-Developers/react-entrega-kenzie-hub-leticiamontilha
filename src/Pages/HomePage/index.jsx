import { NavBar } from "../../Components/NavBar"
import { Header } from "../../Components/Header"
import { MainHomePage, PrincipalSection } from "./style"
import Lixo from "../../Assets/img/lixo.png"
import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { ModalAddTech, ModalEditTech } from "../../Components/Modal"
import { Navigate } from "react-router-dom"
import { TechContext } from "../../Contexts/TechContext"

export const HomePage = () => {

    const { user } = useContext(UserContext)
    const { listTechs, techDelete, modalAdd, setModalAdd, modalEdit, setModalEdit } = useContext(TechContext)

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
                { listTechs.map((elem) => {
                    return (
                        <li key={elem.id}>
                            <h4>{elem.title}</h4>
                            <span>
                                <p>{elem.status}</p>
                                <button className="btnEdit" onClick={() => setModalEdit(true)} >Editar</button>
                                <button onClick={() => techDelete(elem.id) }>
                                    <img src={Lixo} alt="botão excluir"/>
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
        ) :  <Navigate to="/"/>}
        </>
    ) 
}