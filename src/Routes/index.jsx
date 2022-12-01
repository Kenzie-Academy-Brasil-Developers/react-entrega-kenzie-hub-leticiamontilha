import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage"
import { RegisterPage } from "../Pages/RegisterPage";
import { HomePage } from "../Pages/HomePage";
import { useState } from "react";

export const RoutesMain = () => {

    const [ user, setUser ] = useState(null)

    return (
        <Routes>
            <Route path="/" element={ <LoginPage user={user}  setUser={setUser}  /> } />
            <Route path="Register" element={ <RegisterPage /> } />
            <Route path="Home" element={  <HomePage  user={user} setUser={setUser} /> }/>
            <Route path="*" element={<Navigate to="/Home"/> }/>
      </Routes>
    )
}