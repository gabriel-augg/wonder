import { BsChatQuote } from "react-icons/bs";

import styles from "./styles.module.css"

export default function AnswerCounter({answersCount}){
    return (
        <div className={styles.answer}>
            <span>{answersCount}</span>
            <span><BsChatQuote color="#299AD1" size={17}/></span>
        </div>
    )
}