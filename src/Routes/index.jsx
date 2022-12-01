import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage"
import { RegisterPage } from "../Pages/RegisterPage";
import { HomePage } from "../Pages/HomePage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={ <LoginPage />  } />
            <Route path="Register" element={ <RegisterPage /> } />
            <Route path="Home" element={  <HomePage /> }/>
            {/* <Route path="*" element={}/> */}
      </Routes>
    )
}