import { NavBar } from "../../Components/NavBar"
import { Header } from "../../Components/Header"
import { MainHomePage } from "./style"
import { useEffect } from "react"
import { Api } from "../../Services/api"
import { useNavigate } from "react-router-dom"


export const HomePage = ({user, setUser}) => {
    const navigate = useNavigate()
    const tokenUser = window.localStorage.getItem("@TOKEN:")

    useEffect(() => {
        async function getUser () {
            try {
                Api.defaults.headers.common.authorization=`Bearer ${tokenUser}`
                await Api.get("/profile")
                
            } catch (error) {
                navigate("/")
                localStorage.clear()
                console.log(error)
            }
        }

        getUser()

    })


    
    return (
        <>
            <MainHomePage>
            <NavBar setUser={setUser}/> 
            <Header user={user}/>
                <div>
                    <h4>Que pena! Estamos em desenvolvimento :(</h4>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </MainHomePage>
        </>
    )
}