import { Routes, Route } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"
import CreatePost from "../pages/CreatePost"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/entrar" element={ <SignIn/> } />
            <Route path="/cadastrar" element={ <SignUp/> } />
            <Route path="/novapostagem" element={ <CreatePost/> } />
            <Route path="/" element={ <Home /> } />
        </Routes>
    )
}