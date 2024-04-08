import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import styles from "./styles.module.css"
import { FaUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";

export default function Dropdown(){
    const [isActive, setIsActive] = useState(false)
    const {signOut} = useContext(UserContext)
    const onClick = () => setIsActive(!isActive)
    const navigate = useNavigate()

    function handleShowMyPosts(){
        navigate("/minhas-publicacoes")
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
                    <li><FaUser size={15}/><span>Meu perfil</span></li>
                    <li onClick={handleShowMyPosts}><IoIosChatbubbles/><span>Minhas publicações</span></li>
                    <li onClick={handleSignOut}> <IoExitOutline/><span>Sair</span></li>
                </ul>
            </nav>
 
    )
}