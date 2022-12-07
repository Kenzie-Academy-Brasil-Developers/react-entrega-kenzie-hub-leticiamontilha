import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { HeaderPage } from "./style"

export const Header = () => {
    const { user } = useContext(UserContext)
    
    return (
        <HeaderPage>
            <div>
                <span>
                    <h2>Olá, {user.name}</h2>
                    <p>{user.course_module}</p>
                </span>
            </div>
        </HeaderPage>
    )
}