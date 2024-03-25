import { Link } from "react-router-dom"
import ButtonCta from "../ButtonCta"

import styles from "./styles.module.css"
import logo from "../../assets/img/logo.svg"
import { FiSearch } from "react-icons/fi";


export default function Header(){
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
                    <li>
                        <ButtonCta title="Entrar" path="/entrar" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}