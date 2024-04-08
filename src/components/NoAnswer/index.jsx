import { BsChatQuote } from "react-icons/bs"
import styles from "./styles.module.css"

export default function NoAnswer({txt}){
    return(
        <div className={styles.no_answer}>
            <span>{txt}</span><BsChatQuote size={30} color="#299AD1" />
        </div>
    )
}