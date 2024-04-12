import { useState } from "react"
import {useNavigate} from "react-router-dom"

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import styles from "./styles.module.css"

import { FaUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { BsChatQuoteFill } from "react-icons/bs";


export default function Dropdown(){
    const [isActive, setIsActive] = useState(false)
    const {user, signOut} = useContext(UserContext)
    const onClick = () => setIsActive(!isActive)
    const navigate = useNavigate()

    function handleProfile(){
        navigate(`/perfil/${user.id}`)
        setIsActive(!isActive)
    }

    function handleShowMyPosts(){
        navigate("/minhas-publicacoes")
        setIsActive(!isActive)
    }

    function handlePost(){
        navigate("/nova-publicacao")
        setIsActive(!isActive)
    }

    function handleSignOut(){
        signOut()
        navigate("/")
        setIsActive(!isActive)
    }




    return(
            <nav className={`${styles.dropdown} ${isActive ? styles.active : undefined}`}>
                <button onClick={onClick} className={styles.dropdown_button}>Minha conta</button>
                <ul className={styles.dropdown_list}>
                    <li onClick={handleProfile}><FaUser size={15}/><span>Meu perfil</span></li>
                    <li onClick={handlePost}><IoIosAddCircle/><span>Publicar</span></li>
                    <li onClick={handleShowMyPosts}><BsChatQuoteFill/><span>Minhas publicações</span></li>
                    <li ><IoHeart/><span>Minhas curtidas</span></li>
                    <li onClick={handleSignOut}> <IoExitOutline/><span>Sair</span></li>
                </ul>
            </nav>
 
    )
}