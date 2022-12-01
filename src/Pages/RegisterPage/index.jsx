import { FormularioRegister } from "../../Components/Form"
import Logo from "../../Assets/img/Logo.svg"
import { DivLogo, MainRegister, SectionRegister } from "./style"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Api } from "../../Services/api"
import { toast } from "react-toastify"

export const RegisterPage = () => {

    const navigate = useNavigate()
    const [ loading, setLoading ] = useState(false)

    const userRegister = async (formData) => {
        try {
            setLoading(true);
            await Api.post("/users", formData);
            
            toast.success("Cadastro realizado com sucesso!")
            navigate("/")
            
        } catch (error) {
            toast.error("O cadastro não pode ser realizado, tente novamente")
            console.log(error)
        
        } finally {
            setLoading(false);
        }
    }


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