import { useContext } from "react"

import { Link } from "react-router-dom"
import ButtonCta from "../ButtonCta"

import styles from "./styles.module.css"
import logo from "../../assets/img/logo.svg"
import { FiSearch } from "react-icons/fi";
import icon from "../../assets/img/user.svg"

import { Context } from "../../contexts/UserContext"


export default function Header(){

    const { authenticated, loading, user } = useContext(Context)

    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img src={logo} width={130} alt="logo" />
                </Link>
            </div>
            <div className={styles.search_bar}>
                <FiSearch size={27} color="#299AD1"/>
                <input type="text" id="search" name="search" placeholder="Estou pesquisando por..." />
                <button type="submit">Pesquisar</button>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link to="/">Perguntas do momento</Link>
                    </li>
                    {authenticated && user.username != "" ? (
                        <li className={styles.user_icon}>
                            <img src={icon}/>
                            <div>
                                <span>{user.username}</span>
                                <Link>Minha conta</Link>
                            </div>
                        </li>
                    ) : (
                        <li>
                            <ButtonCta title="Entrar" path="/entrar" />
                        </li>
                    )}

                </ul>
            </nav>
        </header>
    )
}