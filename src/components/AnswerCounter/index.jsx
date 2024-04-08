import { BsChatQuote } from "react-icons/bs";

import styles from "./styles.module.css"

export default function AnswerCounter({count}){
    return (
        <div className={styles.answer}>
            <span>{count}</span>
            <span><BsChatQuote color="#299AD1" size={17}/></span>
        </div>
    )
}