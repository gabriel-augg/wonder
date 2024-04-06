import { Routes, Route } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"
import CreatePost from "../pages/CreatePost"
import ViewPost from "../pages/ViewPost"
import ShowUserPosts from "../pages/ShowUserPosts"
import UpdatePost from "../pages/UpdatePost"

import NotFound from "../pages/NotFound"
import Private from "./Private"


export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/entrar" element={ <SignIn/> } />
            <Route path="/cadastrar" element={ <SignUp/> } />
            <Route path="/nova-publicacao" element={ <Private><CreatePost/></Private> } />
            <Route path="/publicacoes/:id" element={<Private><ViewPost/></Private>} />
            <Route path="/minhas-publicacoes" element={<Private><ShowUserPosts/></Private>} />
            <Route path="/publicacoes/editar/:id" element={<Private><UpdatePost/></Private>} />
            <Route path="/" element={ <Home /> } />

            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}