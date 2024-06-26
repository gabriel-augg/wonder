import { Routes, Route } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"
import CreatePost from "../pages/CreatePost"
import ViewPost from "../pages/ViewPost"
import ShowUserPosts from "../pages/ShowUserPosts"
import PostEdit from "../pages/PostEdit"
import Profile from "../pages/Profile"
import ViewLikedPosts from "../pages/ViewLikedPosts"
import EditUser from "../pages/EditUser"

import NotFound from "../pages/NotFound"
import Private from "./Private"


export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/entrar" element={ <SignIn/> } />
            <Route path="/cadastrar" element={ <SignUp/> } />
            <Route path="/perfil/:id" element={<Profile />} />
            <Route path="/nova-publicacao" element={ <Private><CreatePost/></Private> } />
            <Route path="/publicacoes/:id" element={<Private><ViewPost/></Private>} />
            <Route path="/minhas-publicacoes" element={<Private><ShowUserPosts/></Private>} />
            <Route path="/minhas-curtidas" element={<Private><ViewLikedPosts/></Private>} />
            <Route path="/publicacoes/editar/:id" element={<Private><PostEdit/></Private>} />
            <Route path="/perfil/editar/meu-perfil" element={<Private><EditUser/></Private>} />

            <Route path="/" element={ <Home /> } />

            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}