import { NavBar } from "../../Components/NavBar"
import { Header } from "../../Components/Header"
import { MainHomePage, PrincipalSection } from "./style"
import { useContext, useEffect } from "react"
import { Api } from "../../Services/api"
import { useNavigate } from "react-router-dom"
import Lixo from "../../Assets/img/lixo.png"
import { UserContext } from "../../Contexts/UserContext"


export const HomePage = () => {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const tokenUser = localStorage.getItem("@TOKEN:")

    useEffect(() => {
        async function getUser () {
            try {
                Api.defaults.headers.common.authorization=`Bearer ${tokenUser}`
                await Api.get("/profile")
                
            } catch (error) {
                navigate("/")
                localStorage.clear()
                console.log(error)
            }
        }

        getUser()

    })

    
    return (
        <>
            <MainHomePage>
            <NavBar setUser={setUser}/> 
            <Header user={user}/>
            <PrincipalSection>
                <div>
                    <h2>Tecnologias</h2>
                    <button>+</button>
                </div>
              <ul>
                    <li>
                        <h4>React JS</h4>
                        <span>
                            <p>Intermediário</p>
                            <button>
                                <img src={Lixo} alt="botão excluir" />
                            </button>
                        </span>
                    </li>
                </ul>

            </PrincipalSection>
            </MainHomePage>
        </>
    )
}