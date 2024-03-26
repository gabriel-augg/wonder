import { Routes, Route } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"
import CreatePost from "../pages/CreatePost"
import ViewPost from "../pages/ViewPost"

import NotFound from "../pages/NotFound"
import Private from "./Private"


export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/entrar" element={ <SignIn/> } />
            <Route path="/cadastrar" element={ <SignUp/> } />
            <Route path="/novapostagem" element={ <Private><CreatePost/></Private> } />
            <Route path="/posts/:id" element={<Private><ViewPost/></Private>} />
            <Route path="/" element={ <Home /> } />

            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}