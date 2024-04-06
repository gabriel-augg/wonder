import { BsChatQuote } from "react-icons/bs";

import styles from "./styles.module.css"

export default function CommentCounter({count}){
    return (
        <div className={styles.comment}>
            <span>{count}</span>
            <span><BsChatQuote color="#299AD1" size={17}/></span>
        </div>
    )
}