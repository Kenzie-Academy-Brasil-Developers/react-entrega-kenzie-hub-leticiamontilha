import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import  { Api } from "../Services/api"

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const navigate = useNavigate()
    const [ user, setUser ] = useState(null)
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
      
            localStorage.clear()
            localStorage.setItem("@TOKEN:", token)
            localStorage.setItem("@USERID:", userId)
    
        } catch (error) {
            toast.error("Email e/ou senha inválida")
          
            console.log(error)
        
        } finally {
            setLoading(false);
        }
    }

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
        <UserContext.Provider value={{userLogin, user, setUser, loading, setLoading, userRegister}}>
            {children}
        </UserContext.Provider>
    )
}