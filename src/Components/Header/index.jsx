import { HeaderPage } from "./style"

export const Header = ({user}) => {
    return (
        <HeaderPage>
            <div>
                <span>
                    <h2>{user.name}</h2>
                    <p>{user.course_module}</p>
                </span>
            </div>
        </HeaderPage>
    )
}