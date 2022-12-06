import { FormularioRegister } from "../../Components/Form"
import Logo from "../../Assets/img/Logo.svg"
import { DivLogo, MainRegister, SectionRegister } from "./style"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"

export const RegisterPage = () => {

    const { userRegister, loading, setLoading } = useContext(UserContext)

    return (
        <>
            <MainRegister>
                <DivLogo>
                    <img src={Logo} alt="logo Kenzie Hub" />
                    <Link to={"/"}>Voltar</Link>
                </DivLogo>
                <SectionRegister>
                    <h2>Crie sua conta</h2>
                    <h4>Rapido e grátis, vamos nessa</h4>
                    <FormularioRegister userRegister={userRegister} loading={loading} setLoading={setLoading}  />
                </SectionRegister>
            </MainRegister>
        </>
    )
}