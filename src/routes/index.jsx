import { Routes, Route } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/entrar" element={ <SignIn/> } />
            <Route path="/cadastrar" element={ <SignUp/> } />
            <Route path="/" element={ <Home /> } />
        </Routes>
    )
}