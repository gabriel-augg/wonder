import { BsChatQuote } from "react-icons/bs"
import styles from "./styles.module.css"

export default function NoComment({txt}){
    return(
        <div className={styles.no_comment}>
            <span>{txt}</span><BsChatQuote size={30} color="#299AD1" />
        </div>
    )
}