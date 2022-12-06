import { FormularioLogin } from "../../Components/Form"
import Logo from "../../Assets/img/Logo.svg"
import { MainLogin, SectionLogin } from "./style"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"

export const LoginPage = () => {
    const { userLogin, loading, setLoading } = useContext(UserContext)

    return (
        <MainLogin>
            <img src={Logo} alt="" />
            <SectionLogin>
                <h2>Login</h2>
                <FormularioLogin userLogin={userLogin} loading={loading} setLoading={setLoading} />
                <Link to="/Register">Ainda não possui uma conta?</Link>
                <Link className="btnCadastrar" to="/Register" type="submit">Cadastre-se</Link>
            </SectionLogin>
        </MainLogin>
    )
}

