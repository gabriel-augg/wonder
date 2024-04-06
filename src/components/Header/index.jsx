import { useContext} from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

import ButtonLink from "../ButtonLink"
import Search from "../Search"
import Logo from "../Logo"

import styles from "./styles.module.css"
import User from "../User"


export default function Header(){
    const {authenticated, user} = useContext(UserContext)


    return (
        <header className={styles.header}>
            <Logo />
            <Search />
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link to="/">Publicações do momento</Link>
                    </li>
                    {authenticated ? (
                        <li>
                            <User username={user.username} path="/" />
                        </li>
                    ) : (
                        <li>
                            <ButtonLink btnTxt="Entrar" path="/entrar" classN="cta"/>
                        </li>
                    )}

                </ul>
            </nav>
        </header>
    )
}