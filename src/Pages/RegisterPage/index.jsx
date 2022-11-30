import { FormularioRegister } from "../../Components/Form"
import Logo from "../../Assets/img/Logo.svg"
import { DivLogo, MainRegister, SectionRegister } from "./style"
import { ButtonVoltar } from "../../Components/Button"

export const RegisterPage = () => {
    return (
        <>
            <MainRegister>
                <DivLogo>
                    <img src={Logo} alt="logo Kenzie Hub" />
                    <ButtonVoltar>Voltar</ButtonVoltar>
                </DivLogo>
                <SectionRegister>
                    <h2>Crie sua conta</h2>
                    <h4>Rapido e grátis, vamos nessa</h4>
                    <FormularioRegister />
                </SectionRegister>
            </MainRegister>
        </>
    )
}