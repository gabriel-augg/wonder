import { useContext } from "react";
import { useNavigate } from "react-router-dom";


import { FiSearch } from "react-icons/fi";

import { SearchContext } from "../../contexts/SearchContext"

import styles from "./styles.module.css"

export default function Search(){
    const { setSearch } = useContext(SearchContext)
    const navigate = useNavigate()
    return(
        <div className={styles.search}>
            <FiSearch size={27} color="#299AD1"/>
            <input 
                type="text" 
                onChange={(e)=> setSearch(e.target.value)} 
                id="search" name="search" 
                placeholder="Estou pesquisando por..." 
            />
            <button type="button" onClick={() => navigate("/")}>Pesquisar</button>
    </div>
    )
}