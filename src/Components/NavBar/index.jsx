import Logo from "../../Assets/img/Logo.svg"
import { BarraNav } from "./style"
import { useNavigate } from "react-router-dom"

export const NavBar = ({setUser}) => {
    const navigate = useNavigate()
    
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