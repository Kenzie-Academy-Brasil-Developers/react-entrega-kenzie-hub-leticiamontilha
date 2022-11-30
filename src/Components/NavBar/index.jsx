import { ButtonVoltar } from "../Button"
import Logo from "../../Assets/img/Logo.svg"
import { BarraNav } from "./style"

export const NavBar = () => {
    return (
        <BarraNav>
            <img src={Logo} alt="Logo Kenzie Hub" />
            <ButtonVoltar>Voltar</ButtonVoltar>
        </BarraNav>
    )
}