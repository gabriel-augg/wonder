import { useContext} from "react"

import { Link } from "react-router-dom"
import ButtonCta from "../ButtonCta"

import styles from "./styles.module.css"
import logo from "../../assets/img/logo.svg"
import icon from "../../assets/img/user.svg"

import { Context } from "../../contexts/UserContext"
import Search from "../Search"

export default function Header(){
    const {authenticated, user} = useContext(Context)


    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img src={logo} width={130} alt="logo" />
                </Link>
            </div>
            <Search />
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link to="/">Publicações do momento</Link>
                    </li>
                    {!authenticated ? (
                        <li>
                        <ButtonCta title="Entrar" path="/entrar" />
                        </li>
                    ) : (
                        <li className={styles.user_icon}>
                            <img src={icon}/>
                            <div>
                                <span>{user.username}</span>
                                <Link>Minha conta</Link>
                            </div>
                        </li>
                    )}

                </ul>
            </nav>
        </header>
    )
}