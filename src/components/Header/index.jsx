import { useContext} from "react"
import { Link } from "react-router-dom"
import { Context } from "../../contexts/UserContext"

import ButtonCta from "../ButtonCta"
import Search from "../Search"
import Logo from "../Logo"

import styles from "./styles.module.css"
import icon from "../../assets/img/user.svg"


export default function Header(){
    const {authenticated, user} = useContext(Context)


    return (
        <header className={styles.header}>
            <Logo />
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