import Logo from "../../Assets/img/Logo.svg"
import { BarraNav } from "./style"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"

export const NavBar = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    
    const logout = () => {
      
        setUser(null)
        window.localStorage.clear()
        navigate("/")
        
    }
    return (
        <BarraNav>
            <img src={Logo} alt="Logo Kenzie Hub" />
            <button onClick={logout} >Voltar</button>
        </BarraNav>
    )
}