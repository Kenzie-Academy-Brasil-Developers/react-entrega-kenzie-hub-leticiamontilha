import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import  { Api } from "../Services/api"
import { TechProvider } from "./TechContext";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const navigate = useNavigate()
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ loginControler, setLoginControler ] = useState(0)

    const userLogin = async (formData) => {
        try {
            setLoading(true);
            const response = await Api.post("/sessions", formData);
            const token = response.data.token
            const usuario = response.data.user
            const userId = response.data.user.id

            toast.success("Login realizado com sucesso!")
            
            setUser(usuario)
            setLoginControler(loginControler +1)
    
            localStorage.clear()
            localStorage.setItem("@TOKEN:", token)
            localStorage.setItem("@USERID:", userId)
            
            navigate("/Home")

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


    useEffect(() => {
        async function getUser () {
            const tokenUser = localStorage.getItem("@TOKEN:")
            
            if(!tokenUser){
              return <Navigate to="/"/>
            } 

            try {
                Api.defaults.headers.common.authorization=`Bearer ${tokenUser}`
                const response =  await Api.get("/profile")
                setUser(response.data)
                
                navigate("/Home")

            } catch (error) {
                navigate("/")
                localStorage.clear()
                console.log(error)
            }
        }
        
        getUser()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <UserContext.Provider value={{userLogin, 
        user, setUser, 
        loading, setLoading, 
        userRegister, loginControler
        }}>
            <TechProvider>
                {children}
            </TechProvider>
        </UserContext.Provider>
    )
}