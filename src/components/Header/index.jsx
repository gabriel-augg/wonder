import { useContext} from "react"
import { Link } from "react-router-dom"
import { Context } from "../../contexts/UserContext"

import ButtonCta from "../ButtonCta"
import Search from "../Search"
import Logo from "../Logo"

import styles from "./styles.module.css"
import User from "../User"


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
                    {authenticated ? (
                        <li>
                            <User username={user.username} header={true} />
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