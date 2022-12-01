import { ButtonCadastrar } from "../../Components/Button"
import { FormularioLogin } from "../../Components/Form"
import Logo from "../../Assets/img/Logo.svg"
import { MainLogin, SectionLogin } from "./style"

export const LoginPage = () => {

    return (
        <MainLogin>
            <img src={Logo} alt="" />
            <SectionLogin>
                <h2>Login</h2>
                <FormularioLogin />
                <p>Ainda não possui uma conta?</p>
                <ButtonCadastrar type="submit">Cadastre-se</ButtonCadastrar>
            </SectionLogin>
        </MainLogin>
    )
}

