import { useContext} from "react"

import { Link, useNavigate } from "react-router-dom"
import ButtonCta from "../ButtonCta"

import styles from "./styles.module.css"
import logo from "../../assets/img/logo.svg"
import { FiSearch } from "react-icons/fi";
import icon from "../../assets/img/user.svg"

import { SearchContext } from "../../contexts/SearchContext"
import { Context } from "../../contexts/UserContext"



export default function Header(){
    const {authenticated, user} = useContext(Context)
    const { setSearch } = useContext(SearchContext)
    const navigate = useNavigate()

    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img src={logo} width={130} alt="logo" />
                </Link>
            </div>
            <div className={styles.search_bar}>
                <FiSearch size={27} color="#299AD1"/>
                <input type="text" onChange={(e)=>setSearch(e.target.value)} id="search" name="search" placeholder="Estou pesquisando por..." />
                <button type="button" onClick={() => navigate("/")}>Pesquisar</button>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link to="/">Publicações do momento</Link>
                    </li>
                    <li>
                        <span>{}</span>
                    </li>
                    {!authenticated ? (
                        <li>
                        <ButtonCta title="Entrar" path="/entrar" />
                        </li>
                    ) : (
                        <li className={styles.user_icon}>
                            <img src={icon}/>
                            <div>
                                <span>{user?.username}</span>
                                <Link>Minha conta</Link>
                            </div>
                        </li>
                    )}

                </ul>
            </nav>
        </header>
    )
}