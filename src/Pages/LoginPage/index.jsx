import { FormularioLogin } from "../../Components/Form"
import Logo from "../../Assets/img/Logo.svg"
import { MainLogin, SectionLogin } from "./style"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useState } from "react"
import { Api } from "../../Services/api"

export const LoginPage = ({user, setUser}) => {
    const navigate = useNavigate()
    const [ loading, setLoading ] = useState(false)

    const userLogin = async (formData) => {
        try {
            setLoading(true);
            const response = await Api.post("/sessions", formData);
            const token = response.data.token
            const userId = response.data.user.id
            const usuario = response.data.user

            toast.success("Login realizado com sucesso!")
            navigate("/Home")
           
            setUser(usuario)
      
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN:", token)
            window.localStorage.setItem("@USERID:", userId)
    
        } catch (error) {
            toast.error("Email e/ou senha inválida")
          
            console.log(error)
        
        } finally {
            setLoading(false);
        }
    }


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

